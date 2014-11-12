/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var phone = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        phone.receivedEvent('deviceready');
        phone.checkConnection();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //set body size to screen resolution, prevents keyboard crunching.
        var body = document.getElementsByTagName("body")[0];
        body.style.minWidth = window.innerWidth;
        body.style.minHeight = window.innerHeight;

        //override device back button
        document.addEventListener("backbutton", function(e){
            e.preventDefault();
            //custom code here, eg.
            //angular.element('[ng-controller=AppCtrl]').scope().goHome();
            //angular code must be called after angular has bootstrapped.
            //angular code modifying $scope must call $apply for propagation.
        }, false);
    },

    checkConnection: function() {
        var networkState = navigator.connection.type;

        if(networkState == Connection.NONE) {
            window.location.href = "error.html"
        }
    }
};