function encrypt() {
    var main   = "abgsezi";
    var decode = "4695321";

    main = main.split("");
    decode = decode.split("");

    var input = prompt("Write The Text Here.");

    input = input.toLowerCase();

    var output = "";

    var x;
    var a;

    for (x of input) {
        var b = main.indexOf(x);
        
        if (b == -1) {
            a = Math.floor(Math.random() * 2);
            
            if (a == 1) {
                x = x.toUpperCase();
                output = output+x;
            } else {
                output = output+x;
            };
        } else {
            a = Math.floor(Math.random() * 4);
            
            if (a == 3) {
                a = Math.floor(Math.random() * 2);
            
                if (a == 1) {
                    x = x.toUpperCase();
                    output = output+x;
                } else {
                    output = output+x;
                };
				
            } else {
		output = output+decode[b];
            };
            
        };
    };

    console.log(output)
};

function decrypt() {
    var main   = "4695321";
    var decode = "abgsezi";

    main = main.split("");
    decode = decode.split("");

    var input = prompt("Write The Text Here.");

    input = input.toLowerCase();

    var output = "";

    var x;
    var a;

    for (x of input) {
        var b = main.indexOf(x);
        
        if (b == -1) {
            output = output+x;
        } else {
            output = output+decode[b];
        };
    };

    console.log(output)
};
