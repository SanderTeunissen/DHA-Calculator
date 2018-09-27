import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  Display = "0";
  FirstValue: string;
  SecondValue: string;
  Operator: string;

  DisplayValueIsStored = false;
  DisplayIsCalculated = false;

  UseRadians = false;
  RadiansButtonColor = "medium";

  constructor(public navCtrl: NavController) {}

  clickDigit(event) {
    let digit = event.srcElement.textContent;
    if (
      this.Display == "0" ||
      this.DisplayIsCalculated ||
      this.DisplayValueIsStored
    ) {
      if (digit == ".") {
        this.Display = "0.";
      } else {
        this.Display = digit;
      }
    } else {
      this.Display = this.Display + digit;
    }
    this.DisplayValueIsStored = false;
    this.DisplayIsCalculated = false;
  }

  clickClear() {
    this.FirstValue = undefined;
    this.SecondValue = undefined;
    this.Operator = undefined;
    this.Display = "0";
  }

  radiusToggle() {
    this.UseRadians = !this.UseRadians;
    if (this.UseRadians) {
      this.RadiansButtonColor = "primary";
    } else {
      this.RadiansButtonColor = "medium";
    }
  }

  clickRemoveLastInput() {
    if (!this.DisplayValueIsStored && !this.DisplayIsCalculated) {
      let newDisplayValue = this.Display.slice(0, -1);
      if (newDisplayValue.length < 1) {
        this.Display = "0";
      } else {
        this.Display = newDisplayValue;
      }
    }
  }

  clickOperator(event) {
    this.parseDisplay();
    switch (event.srcElement.textContent) {
      case "=":
        if (this.valuesSet() == 2) {
          this.calculate();
        }
        break;
      case "+/-":
        if (this.Display.charAt(0) == "-") {
          this.Display = this.Display.substr(1);
        } else {
          this.Display = "-" + this.Display;
        }
        break;
      case "π":
        this.Display = Math.PI.toString();
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
        if (this.valuesSet() == 2) {
          this.calculate();
          this.parseDisplay();
        }
        this.Operator = event.srcElement.textContent;
        break;
      case "%":
      case "x²":
      case "x³":
      case "10^x":
      case "²√x":
      case "sin":
      case "cos":
      case "tan":
        this.Operator = event.srcElement.textContent;
        this.calculate();
        break;
    }
  }

  private parseDisplay() {
    if (this.FirstValue == undefined) {
      this.FirstValue = this.Display;
    } else {
      this.SecondValue = this.Display;
    }
    this.DisplayValueIsStored = true;
  }

  private valuesSet(): Number {
    let count = 0;
    if (this.FirstValue != undefined) {
      count++;
    }
    if (this.SecondValue != undefined) {
      count++;
    }
    return count;
  }

  private calculate() {
    let val1 = parseFloat(this.FirstValue);
    let val2 = parseFloat(this.SecondValue);
    switch (this.Operator) {
      case "+":
        this.Display = (val1 + val2).toString();
        break;
      case "-":
        this.Display = (val1 - val2).toString();
        break;
      case "×":
        this.Display = (val1 * val2).toString();
        break;
      case "÷":
        this.Display = (val1 / val2).toString();
        break;
      case "%":
        this.Display = (parseFloat(this.Display) / 100).toString();
        break;
      case "x²":
        this.Display = Math.pow(parseFloat(this.Display), 2).toString();
        break;
      case "x³":
        this.Display = Math.pow(parseFloat(this.Display), 3).toString();
        break;
      case "10^x":
        this.Display = Math.pow(10, parseFloat(this.Display)).toString();
        break;
      case "²√x":
        this.Display = Math.sqrt(parseFloat(this.Display)).toString();
        break;
      case "sin":
        let sinVal = parseFloat(this.Display);
        if (!this.UseRadians)
          sinVal = (parseFloat(this.Display) / 180) * Math.PI;
        this.Display = Math.sin(sinVal).toString();
        break;
      case "cos":
        let cosVal = parseFloat(this.Display);
        if (!this.UseRadians)
          cosVal = (parseFloat(this.Display) / 180) * Math.PI;
        this.Display = Math.cos(cosVal).toString();
        break;
      case "tan":
        let tanVal = parseFloat(this.Display);
        if (!this.UseRadians)
          tanVal = (parseFloat(this.Display) / 180) * Math.PI;
        this.Display = Math.tan(tanVal).toString();
        break;
    }
    this.FirstValue = undefined;
    this.SecondValue = undefined;
    this.Operator = undefined;
    this.DisplayIsCalculated = true;
  }
}
