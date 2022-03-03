#!/bin/bash
BIN_DIR=`dirname $0`
cd $BIN_DIR
ZIP_FILE="../connect-tick.zip"
rm -f $ZIP_FILE
zip -9r $ZIP_FILE content-script.js icon* manifest.json
