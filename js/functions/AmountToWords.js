
//Author : Md. Babul Mirdha
//Date: 06-11-2019

function  ToWordsBdWithTakaPaisaInBangla(s)
{
   
    var dg = [ 'শূন্য', 'এক', 'দুই', 'তিন', 'চার', 'পাঁচ', 'ছয়', 'শাত', 'আট', 'নয়' ];
    var tn = [ 'দশ', 'এগারো', 'বারো', 'তেরো', 'চোদ্দ', 'পনের', 'ষোল', 'সতের', 'আঠেরো', 'উনিশ' ];
    var tw = [ 'বিশ', 'তিরিশ', 'চল্লিশ', 'পঞ্চাশ', 'ষাট', 'সত্তর', 'আশি', 'নব্বই' ];

    s = s.toString();
    s = s.replace(/[\, ]/g, '');

    if (s != parseFloat(s)) return 'সংখ্যা নয়'; 


    var ln = s.indexOf('.');
    if (ln == -1) ln = s.length;

    if (ln > 15) return 'অনেক বড় সংখ্যা';


 var pointLen = s.length - ln - 1;
    if (pointLen == 1)
    {
        s += '0';
    }
    else if (pointLen > 2)
    {
        s = s.substring(0,ln + 3);
    }

    var n = s.split(''); 
    var str = '';
    var sk = 0;
    for (var i = 0; i < ln; i++)
    {
        if ((ln - i) == 2 
            || (ln - i) == 5
            || (ln - i) == 7 
            || (ln - i == 9) 
            || (ln - i == 12) 
            || (ln - i == 14)) //true when x-i=2,5,7,9,12,14
        {
            //work with 10~19
            if (n[i] == '1')
            {
                str += tn[Number(n[i + 1])] + ' ';
                i++;
                sk = 1;
            }
            //wotk with 20,30,40,50,60,70,80,90 
            else if (n[i]!= 0)
            {
                str += tw[n[i] - 2] + ' ';
                if (n[i + 1] == 0) i++;
                sk = 1;
            }
        }
        else if (n[i] != 0)
        {
            //work with 0~9
            str += dg[n[i]] + ' ';
            //work with shot
            
            if ((ln - i) == 10|| (ln - i) == 3) 
            {
                str += 'শত ';
                var count = 0;
                var ter = 2;
                for (var j = 1; j <= ter; j++)
                {
                    if (n[i + j] == '0') count++;
                }
                if (count == ter) i += count;
            } 
            
            sk = 1;
        }

        if ((ln - i)>=4 ) //true when x-i=1,4,7,10,13,16
        {
            //work with over hajar
            if (sk)
            {
                
                   if ((ln - i)  == 4
                    || (ln - i) == 11)
                {
                    str += 'হাজার ';
                      var count = 0;
                    var ter = 3;
                    for (var j = 1; j <= ter; j++)
                    {
                        if (n[i + j] == '0') count++;
                    }

                    if (count == ter) i += count;

                }
                 if ((ln - i)  == 13 
                    || (ln - i) == 6)
                {
                    str += 'লাখ ';
                      var count = 0;
                    var ter = 5;
                    for (var j = 1; j <= ter; j++)
                    {
                        if (n[i + j] == '0') count++;
                    }

                    if (count == ter) i += count;

                }
                 if ((ln - i) == 8 
                || (ln - i) == 15)
                {
                    str += 'কোটি ';
                      var count = 0;
                    var ter = 6;
                    for (var j = 1; j <= ter; j++)
                    {
                        if (n[i + j] == '0') count++;
                    }

                    if (count == ter) i += count;
                    sk = 1;
                }

            }
           
        }
    }
    
     if (str!="")
    {
        str += "টাকা ";    
    }
    
    //work for decimal point
    if (ln != s.length)
    {
        var y = s.length;
        
        var paisaInWord = '';
        for (var i = ln + 1; i < y ; i++)
        {
        
        if (n[i] == '0' &&  (n[i+1] == '0')) break;
        
            //work with 10~19
            if (n[i] == '1')
            {
                paisaInWord += tn[n[i + 1]] + ' ';
                i++;
               
            }
            else if (n[i] == '0')
            {
                paisaInWord += dg[n[i + 1]] + ' ';
                i++;
            }
            //wotk with 20,30,40,50,60,70,80,90 
            else if (n[i] != 0)
            {
                paisaInWord += tw[n[i] - 2] + ' ';
               
                if (n[i + 1] != '0')
                {
                    paisaInWord += dg[n[i + 1]] + ' ';
                
                }
                i++;
            }
            }

        if(paisaInWord!='')
        {
        if(str!='')
       str += 'এবং '+ paisaInWord +'পয়সা ';     
       else        str +=  paisaInWord +'পয়সা ';     
        }
       
    }
   
   
       
    if(str!='') 
    {
        
    str+=' মাত্র';
    }
    
    return str.replace(/\s+/g, ' ');
}


//Author : Md. Babul Mirdha
//Date: 14-09-2011

function ToWordsBdWithTakaPaisaInEnglish(s) {

    var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    s = s.toString();
    s = s.replace(/[\, ]/g, '');

    if (s != parseFloat(s)) return 'Not a number';


    var ln = s.indexOf('.');
    if (ln == -1) ln = s.length;

    if (ln > 15) return 'Too big';


    var pointLen = s.length - ln - 1;
    if (pointLen == 1) {
        s += '0';
    }
    else if (pointLen > 2) {
        s = s.substring(0, ln + 3);
    }

    var n = s.split('');
    var str = '';
    var sk = 0;
    for (var i = 0; i < ln; i++) {
        if ((ln - i) == 2
            || (ln - i) == 5
            || (ln - i) == 7
            || (ln - i == 9)
            || (ln - i == 12)
            || (ln - i == 14)) //true when x-i=2,5,7,9,12,14
        {
            //work with 10~19
            if (n[i] == '1') {
                str += tn[Number(n[i + 1])] + ' ';
                i++;
                sk = 1;
            }
            //wotk with 20,30,40,50,60,70,80,90 
            else if (n[i] != 0) {
                str += tw[n[i] - 2] + ' ';
                if (n[i + 1] == 0) i++;
                sk = 1;
            }
        }
        else if (n[i] != 0) {
            //work with 0~9
            str += dg[n[i]] + ' ';
            //work with hundred

            if ((ln - i) == 10 || (ln - i) == 3) {
                str += 'hundred ';
                var count = 0;
                var ter = 2;
                for (var j = 1; j <= ter; j++) {
                    if (n[i + j] == '0') count++;
                }
                if (count == ter) i += count;
            }

            sk = 1;
        }

        if ((ln - i) >= 4) //true when x-i=1,4,7,10,13,16
        {
            //work with over thousand
            if (sk) {

                if ((ln - i) == 4
                    || (ln - i) == 11) {
                    str += 'thousand ';
                    var count = 0;
                    var ter = 3;
                    for (var j = 1; j <= ter; j++) {
                        if (n[i + j] == '0') count++;
                    }

                    if (count == ter) i += count;

                }
                if ((ln - i) == 13
                    || (ln - i) == 6) {
                    str += 'lac ';
                    var count = 0;
                    var ter = 5;
                    for (var j = 1; j <= ter; j++) {
                        if (n[i + j] == '0') count++;
                    }

                    if (count == ter) i += count;

                }
                if ((ln - i) == 8
                    || (ln - i) == 15) {
                    str += 'crore ';
                    var count = 0;
                    var ter = 6;
                    for (var j = 1; j <= ter; j++) {
                        if (n[i + j] == '0') count++;
                    }

                    if (count == ter) i += count;
                    sk = 1;
                }

            }

        }
    }

    if (str != "") {
        str += "taka ";
    }

    //work for decimal point
    if (ln != s.length) {
        var y = s.length;

        var paisaInWord = '';
        for (var i = ln + 1; i < y; i++) {

            if (n[i] == '0' && (n[i + 1] == '0')) break;

            //work with 10~19
            if (n[i] == '1') {
                paisaInWord += tn[n[i + 1]] + ' ';
                i++;

            }
            else if (n[i] == '0') {
                paisaInWord += dg[n[i + 1]] + ' ';
                i++;
            }
            //wotk with 20,30,40,50,60,70,80,90 
            else if (n[i] != 0) {
                paisaInWord += tw[n[i] - 2] + ' ';

                if (n[i + 1] != '0') {
                    paisaInWord += dg[n[i + 1]] + ' ';

                }
                i++;
            }
        }

        if (paisaInWord != '') {
            if (str != '')
                str += 'and ' + paisaInWord + 'paisa ';
            else str += paisaInWord + 'paisa ';
        }

    }
    if (str != '') {

        str += ' only';
    }
    str = str.replace(/\s+/g, ' ')
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}




