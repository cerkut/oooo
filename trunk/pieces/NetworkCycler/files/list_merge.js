this.autowatch = 1;var n_array;var s_array;var new_array;function neighbor(){	n_array = arrayfromargs(arguments);	//post("received neighbor " + n_array + "\n");	myval = n_array;	//bang();}function self(){	new_array = s_array = arrayfromargs(arguments);	//post("received self " + s_array + "\n");	myval = s_array;	//bang();}function merge(){	post("merging....");	for(i=0;i<s_array.length;i++) {		//post(s_array[i]);		//post(n_array[i]);		if(Math.random() < 0.5) 			new_array[i] = s_array[i];		else			new_array[i] = n_array[i];				//post(new_array[i]);	}	outlet(0, new_array);}function bang(){	outlet(0,"myvalue","is",myval);}