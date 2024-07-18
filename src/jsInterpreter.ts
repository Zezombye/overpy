// @ts-ignore - no declared types for Neil Fraser's js-interpreter
import Interpreter from "js-interpreter";

// Add some basic functions to the interpreter
const initFunc = function (interpreter: any, globalObject: any) {
  const macroConsoleObject = interpreter.nativeToPseudo({});
  interpreter.setProperty(globalObject, "console", macroConsoleObject);

  const consoleLogWrapper = function (text: string) {
    console.log(text);
  };

  interpreter.setProperty(
    macroConsoleObject,
    "log",
    interpreter.createNativeFunction(consoleLogWrapper),
  );
};
export let JSInterpreter = new Interpreter("", initFunc);
export const reinitInterpreter = (code: string) => {
  JSInterpreter = new Interpreter(code, initFunc);
};
