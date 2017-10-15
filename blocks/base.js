/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview base blocks for EasyLab4Kids.
 * @author thebapodcast@gmail.com  (Michiel Erasmus)  https://www.facebook.com/EasyBlocks4Kids/
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.base');

goog.require('Blockly.Blocks');


Blockly.Blocks['base_delay'] = {
    helpUrl: 'http://arduino.cc/en/Reference/delay',
    init: function() {
        this.setColour(150);
        this.appendValueInput("DELAY_TIME", 'Number')
            .appendField("Systeem wachttijd")
            .setCheck('Number');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Systeem geeft het op na aantal milliseconden');
    }
};


Blockly.Blocks['pauze'] = {
    helpUrl: 'http://arduino.cc/en/Reference/delay',
    init: function() {
        this.setColour(155);
        this.appendValueInput("PAUZE", 'Number')
            .appendField("Pauze")
            .setCheck('Number');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Pauze voor aantal milliseconden');
    }
};

Blockly.Blocks['process_exit'] = {
    helpUrl: 'http://arduino.cc/en/Reference/delay',
    init: function() {
        this.setColour(120);
        this.appendValueInput("PROCESS_EXIT", 'Number')
            .appendField("Einde applicatie")
            .setCheck('Number');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Einde van het applicatie');
    }
};

Blockly.Blocks['datum_now'] = {
    helpUrl: 'http://arduino.cc/en/Reference/Constants',
    init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["Datum en tijd Huidige datum", "date_now_serial"],
                ["Datum en tijd Nu, in tekstformaat", "date_now_text"]
            ]), 'datum_now');
        this.setOutput(true, 'String');
        this.setTooltip('Huidige datum in milliseoconden');
    }
};

Blockly.Blocks['random1'] = {
    helpUrl: 'http://arduino.cc/en/Reference/Constants',
    init: function() {
        this.setColour(235);
        this.appendDummyInput()
            .appendField("genereer onzin tekst")
            .appendField(new Blockly.FieldDropdown([
                ["Random 4 letter", "4"],
                ["Random 8 lettercijver", "8"]
            ]), 'random1_waarde_len');
        this.setOutput(true, 'String');
        this.setTooltip('Willekeurig tekst');
    }
};

Blockly.Blocks['ja_nee_null'] = {
    helpUrl: 'http://arduino.cc/en/Reference/Constants',
    init: function() {
        this.setColour(239);
        this.appendDummyInput()
            .appendField("Kies Ja/Nee")
            .appendField(new Blockly.FieldDropdown([
                ["NULL waarde", "null"],
                ["Boolean Waar", "true"],
                ["Boolean Onwaar", "false"]
            ]), 'ja_nee_null_waarde');
        this.setOutput(true, 'Number');
        this.setTooltip('Ja, nee of..');
    }
};

Blockly.Blocks['windows_compoort'] = {
    helpUrl: 'http://arduino.cc/en/Reference/Constants',
    init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["USB poort (default)", "null"],
                ["Windows COM1", "COM1"],
                ["Windows COM2", "COM2"],
                ["Windows COM3", "COM3"],
                ["Windows COM4", "COM4"],
                ["Windows COM5", "COM5"],
                ["Windows COM6", "COM6"],
                ["Windows COM7", "COM7"],
                ["Windows COM8", "COM8"],
                ["Windows COM9", "COM9"],
                ["MacOS /dev/USBserial1420", "/dev/cu.wchusbserial1420"],
                ["MacOS /dev/USBserial1421", "/dev/cu.wchusbserial1421"],
                ["MacOS /dev/USBserial1422", "/dev/cu.wchusbserial1422"],
                ["MacOS /dev/HC-06-DevB bluetooth", "/dev/cu.HC-06-DevB"],
                ["Linux /dev/ttyUSB0", "/dev/ttyUSB0"],
                ["Linux /dev/ttyUSB1", "/dev/ttyUSB1"],
                ["Linux /dev/ttyUSB2", "/dev/ttyUSB2"]
            ]), 'COM_POORT')
        this.setOutput(true, 'String');
        this.setTooltip('COM poort in Windows');
    }
};

Blockly.Blocks['base_map'] = {
    helpUrl: 'http://arduino.cc/en/Reference/map',
    init: function() {
        this.setColour(230);
        this.appendValueInput("NUM", 'Number')
            .appendField("Map ")
            .setCheck('Number');
        this.appendValueInput("DMAX", 'Number')
            .appendField("value to [0-")
            .setCheck('Number');
        this.appendDummyInput()
            .appendField("]");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Re-maps a number from [0-1024] to another.');
    }
};

Blockly.Blocks['inout_buildin_led'] = {
    helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
    init: function() {
        this.setColour(190);
        this.appendDummyInput()
            .appendField("Build-in LED Stat")
            .appendField(new Blockly.FieldDropdown([
                ["HIGH", "HIGH"],
                ["LOW", "LOW"]
            ]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('light or off the build-in LED');
    }
};

Blockly.Blocks['inout_digital_write'] = {
    helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
    init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField("DigitalWrite PIN#")
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
            .appendField("Stat")
            .appendField(new Blockly.FieldDropdown([
                ["HIGH", "HIGH"],
                ["LOW", "LOW"]
            ]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Write digital value to a specific Port');
    }
};

Blockly.Blocks['inout_digital_read'] = {
    helpUrl: 'http://arduino.cc/en/Reference/DigitalRead',
    init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField("DigitalRead PIN#")
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.setOutput(true, 'Boolean');
        this.setTooltip('');
    }
};

Blockly.Blocks['inout_analog_write'] = {
    helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
    init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField("AnalogWrite PIN#")
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.appendValueInput("NUM", 'Number')
            .appendField("value")
            .setCheck('Number');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Write analog value between 0 and 255 to a specific Port');
    }
};

Blockly.Blocks['inout_analog_read'] = {
    helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
    init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField("AnalogRead PIN#")
            .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
        this.setOutput(true, 'Number');
        this.setTooltip('Return value between 0 and 1024');
    }
};

Blockly.Blocks['inout_tone'] = {
    helpUrl: 'http://www.arduino.cc/en/Reference/Tone',
    init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField("Tone PIN#")
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.appendValueInput("NUM", "Number")
            .appendField("frequency")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("Generate audio tones on a pin");
    }
};

Blockly.Blocks['inout_notone'] = {
    helpUrl: 'http://www.arduino.cc/en/Reference/NoTone',
    init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField("No tone PIN#")
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("Stop generating a tone on a pin");
    }
};

Blockly.Blocks['inout_highlow'] = {
    helpUrl: 'http://arduino.cc/en/Reference/Constants',
    init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["HIGH", "HIGH"],
                ["LOW", "LOW"]
            ]), 'BOOL')
        this.setOutput(true, 'Boolean');
        this.setTooltip('');
    }
};

//servo block
//http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?cPath=170_171
Blockly.Blocks['servo_move'] = {
    helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
    init: function() {
        this.setColour(190);
        this.appendDummyInput()
            .appendField("Servo")
            .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/a991.jpg", 64, 64))
            .appendField("PIN#")
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        this.appendValueInput("DEGREE", 'Number')
            .setCheck('Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Degree (0~180)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('move between 0~180 degree');
    }
};

Blockly.Blocks['servo_read_degrees'] = {
    helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
    init: function() {
        this.setColour(190);
        this.appendDummyInput()
            .appendField("Servo")
            .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/a991.jpg", 64, 64))
            .appendField("PIN#")
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Read Degrees")
        this.setOutput(true, 'Number');
        this.setTooltip('return that degree with the last servo move.');
    }
};

Blockly.Blocks['serial_print'] = {
    helpUrl: 'http://www.arduino.cc/en/Serial/Print',
    init: function() {
        this.setColour(230);
        this.appendValueInput("CONTENT", 'String')
            .appendField("Console debug print");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Prints data to the console/serial port as human-readable ASCII text.');
    }
};