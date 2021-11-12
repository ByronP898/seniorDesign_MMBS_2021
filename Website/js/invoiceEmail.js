// PDF Creation and Email for Music Matters booking Invoice
// Author: Byron Prather (bjp0017@auburn.edu)
// Version: 10/8/21
// The Purpose of this code is to generate PDFs given artist name and performance time to be attached
// to emails sent to specified accountant emails. 

			(function(API){
				API.myText = function(txt, options, x, y) {
					options = options ||{};
					/* Use the options align property to specify desired text alignment
					 * Param x will be ignored if desired text alignment is 'center'.
					 * Usage of options can easily extend the function to apply different text 
					 * styles and sizes 
					*/
					if( options.align == "center" ){
						// Get current font size
						var fontSize = this.internal.getFontSize();

						// Get page width
						var pageWidth = this.internal.pageSize.width;

						// Get the actual text's width
						/* You multiply the unit width of your string by your font size and divide
						 * by the internal scale factor. The division is necessary
						 * for the case where you use units other than 'pt' in the constructor
						 * of jsPDF.
						*/
						txtWidth = this.getStringUnitWidth(txt)*fontSize/this.internal.scaleFactor;

						// Calculate text's x coordinate
						x = ( pageWidth - txtWidth ) / 2;
					}

					// Draw text at x,y
					this.text(txt,x,y);
				}
			})(jsPDF.API)
			
			function genConfirm() {
				window.alert("Generating Confirmation PDF")
				
				var doc = new jsPDF('p','in')
				//Set the desired font
				doc.setFont('Times-Bold');
				doc.setFontType('bold');
				doc.setFontSize(13)
				//All the following is the text template broken down by line.
				doc.myText('RENAISSANCE/EXCHANGE MONTGOMERY, AL', {align: "center"},0 , 1)
				doc.myText('LIVE PERFORMANCE CONTRACT/CONFIRMATION', {align: "center"},0 , 1.5)
				doc.myText('MUSICMATTERSBOOKINGS.COM', {align: "center"},0 , 2)
				doc.myText('_____________ artist/performers agree to perform music live at The', {align: "center"},0 , 3)
				doc.myText('Renaissance/Exchange Bar, 201 Tallapossa St., Montgomery, AL 36104 on the', {align: "center"},0 , 3.25)
				doc.myText('evening of ______________________ between the hours of ________________.', {align: "center"},0 , 3.5)
				doc.myText('Renaissance/Exchange Bar in Montgomery, AL. agrees to pay the above named', {align: "center"},0 , 3.75)
				doc.myText('artists _______ and said payment to be paid upon completion of this', {align: "center"},0 , 4)
				doc.myText('performance', {align: "center"},0 , 4.25)
				
				doc.myText('If for reasons, beyond your control, you are unable to make your scheduled', {align: "center"},0 , 4.75)
				doc.myText('confirmed performance time and date; It is our expectation that you will contact', {align: "center"},0 , 5)
				doc.myText('Mike Moody at 619-307-5866. If he cannot be reached please call James Boheim', {align: "center"},0 , 5.25)
				doc.myText('334-224-3814. This should be done at the earliest possible time, but no later than', {align: "center"},0 , 5.5)
				doc.myText('four hours prior to your set. Thank you in advance for complying with this request.', {align: "center"},0 , 5.75)
				doc.myText('MusicMattersBookings.com and The Renaissance/Exchange.', {align: "center"},0 , 6)
				
				
				
				doc.save('testConfirmation.pdf')
			}
			
			function genInvoice() {
				window.alert("Generating Invoice PDF")
				
				var doc = new jsPDF('p','in')
				//Set the desired font
				doc.setFont('Times-Bold');
				doc.setFontType('bold');
				doc.setFontSize(13)
				//All the following is the text template broken down by line.
				doc.myText('RENAISSANCE/EXCHANGE MONTGOMERY, AL', {align: "center"},0 , 1)
				doc.myText('LIVE PERFORMANCE CONTRACT/CONFIRMATION', {align: "center"},0 , 1.5)
				doc.myText('INVOICE', {align: "center"},0 , 2)
				doc.myText('MUSICMATTERSBOOKINGS.COM', {align: "center"},0 , 2.5)
				doc.myText('_____________ artist/performers agree to perform music live at The', {align: "center"},0 , 3.5)
				doc.myText('Renaissance/Exchange Bar, 201 Tallapossa St., Montgomery, AL 36104 on the', {align: "center"},0 , 3.75)
				doc.myText('evening of ______________________ between the hours of ________________.', {align: "center"},0 , 4)
				doc.myText('Renaissance/Exchange Bar in Montgomery, AL. agrees to pay the above named', {align: "center"},0 , 4.25)
				doc.myText('artists _______ and said payment to be paid upon completion of this', {align: "center"},0 , 4.5)
				doc.myText('performance.', {align: "center"},0 , 4.75)
				
				
				doc.save('testInvoice.pdf')
			}