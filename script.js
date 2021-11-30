var names=new Array();
names[0]="Ryan";
names[1]="Noah";
names[2]="James";
names[3]="Brennon";
names[4]="Oliver";
names[5]="Lucas";
names[6]="Kalen";
names[7]="paula";
names[8]="Jim";
names[9]="paul";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}