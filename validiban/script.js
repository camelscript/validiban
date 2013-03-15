function isValidIBAN(value){
    var lCode = {};
    lCode["A"] = 10; 
    lCode["B"] = 11;
    lCode["C"] = 12; 
    lCode["D"] = 13;
    lCode["E"] = 14; 
    lCode["F"] = 15;
    lCode["G"] = 16; 
    lCode["H"] = 17;
    lCode["I"] = 18; 
    lCode["J"] = 19;
    lCode["K"] = 20; 
    lCode["L"] = 21;
    lCode["M"] = 22; 
    lCode["N"] = 23;
    lCode["O"] = 24; 
    lCode["P"] = 25;
    lCode["Q"] = 26;
    lCode["R"] = 27; 
    lCode["S"] = 28;
    lCode["T"] = 29;
    lCode["U"] = 30;
    lCode["V"] = 31; 
    lCode["W"] = 32;
    lCode["X"] = 33;
    lCode["Y"] = 34;
    lCode["Z"] = 35;
	var val = value.replace(/\s+/g, '');
	var prefix = val.substring(0,4);
	var rearranged = ''+val.substring(4, val.length)+prefix;
	var divident = '';
	for (var i = 0; i < rearranged.length; i++) {
		var node = rearranged.substring(i,i+1).toUpperCase();
		if(isNaN(node)){
			divident += lCode[node];
		} else {
			divident += parseInt(node);
		}
	};
	var divisor = 97;
    var cDivident = '';
    var cRest = '';

    for (var i = 0; i < divident.length; i++) {
        var cChar = divident.substring(i,i+1);
        var cOperator = cRest + '' + cDivident + '' + cChar;

        if ( cOperator < parseInt(divisor) ) {
                cDivident += '' + cChar;
        } else {
                cRest = cOperator % divisor;
                if ( cRest == 0 ) {
                    cRest = '';
                }
                cDivident = '';
        }

    }
    cRest += '' + cDivident;
    if (cRest == 1) return true;
    return false;
}
