/**
 * This file contains the global constants that is used
 * throughout the application 
 */

/**
 * CONST is used for the general constants throughout the app
 */
var CONST = {
	  appKey: 'kid_TVslN-7yHi',
      appSecret: '62950f04922b41d5b836b8f4c470c4c6',
      emptyString: ""
};

/**
 * ERROR_MSG is used to represent the error messages displayed 
 * throughout the app 
 */
var ERROR_MSG = {
    title : {
        connectionError: "Connection Error"
    },
    type: {
        error: "error",
        warning: "warning",
        success: "success",
        info: "info"
    },
    loginFailed: "Login failed, please check your credentials",
    connectionFailed: "Connection failed :( please check your wifi or data connection."
};

/**
 * URI_PATH is used for the paths in the app
 */
var URI_PATH = {
    root: "/"
};

angular.module('app.constants', []).
    constant('CONST', CONST).
    constant('ERROR_MSG', ERROR_MSG).
    constant('URI_PATH', URI_PATH);