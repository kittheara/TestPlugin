/********* lastChristmas.m Cordova Plugin Implementation *******/

#import "lastChristmas.h"
#import <Cordova/CDV.h>

@interface lastChristmas : CDVPlugin {
  // Member variables go here.
}

- (void)lastChristmas:(CDVInvokedUrlCommand*)command;
@end

@implementation lastChristmas

- (void)lastChristmas:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];

    if (echo != nil && [echo length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
