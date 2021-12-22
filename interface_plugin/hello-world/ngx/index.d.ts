import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Hello World
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { HelloWorld } from '@awesome-cordova-plugins/hello-world';
 *
 *
 * constructor(private helloWorld: HelloWorld) { }
 *
 * ...
 *
 *
 * this.helloWorld.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class HelloWorld extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @param arg
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    show(arg: string): Promise<any>;
}
