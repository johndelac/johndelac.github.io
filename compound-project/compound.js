document.write("<table>");
for (var i = 1; i <= 10; i++){
    if(i == 1){
        document.write('<tr class="maroon">')
        document.write("<th>Year</th>")
        document.write("<th>Amount on Deposit</th>")
        document.write("<th>Interest Rate</th>")
        document.write("</tr>")
    }

    var interest = .05;
    var total = 1000 * Math.pow((1+interest), i);
    document.write('<tr class = output>')
    document.write(`<td>${i}</td>`)
    document.write(`<td>${total.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits:2})}</td>`)
    document.write(`<td>${interest}</td>`)
    document.write("</tr>")

    if(i == 10){
        document.write("<table>");
        for (var j = 1; j <= 10; j++){
            if(j == 1){
                document.write('<tr class="maroon">')
                document.write("<th>Year</th>")
                document.write("<th>Amount on Deposit</th>")
                document.write("<th>Interest Rate</th>")
                document.write("</tr>")
            }
        
            var interest = .06;
            var total = 1000 * Math.pow((1+interest), j);
            document.write('<tr class = output>')
            document.write(`<td>${j}</td>`)
            document.write(`<td>${total.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits:2})}</td>`)
            document.write(`<td>${interest}</td>`)
            document.write("</tr>")
        }
        document.write("</table>");
    }

    if(j == 11){
        document.write("<table>");
        for (var h = 1; h <= 10; h++){
            if(h == 1){
                document.write('<tr class="maroon">')
                document.write("<th>Year</th>")
                document.write("<th>Amount on Deposit</th>")
                document.write("<th>Interest Rate</th>")
                document.write("</tr>")
            }
        
            var interest = .07;
            var total = 1000 * Math.pow((1+interest), h);
            document.write('<tr class = output>')
            document.write(`<td>${h}</td>`)
            document.write(`<td>${total.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits:2})}</td>`)
            document.write(`<td>${interest}</td>`)
            document.write("</tr>")
        }
        document.write("</table>");
    }3
    
}
document.write("</table>");