# A tip calculator
# A tip calculator using a GUI interface
# Austin Howard Aug - 13 - 2014

from tkinter import *
#Creating buttons.
class Calculator(Frame):
    """ A GUI tip calculator."""
    def __init__(self, master):
        Frame.__init__(self, master)
        self.grid()
        self.creating_buttons()

    def creating_buttons(self):
        """This list includes Entry fields, which the user will use to define
        several objects such as Bill, and how many people are paying on that bill."""
        #Create an entry field button for how much the bill total is.
        #Create a label
        bill_lbl = Label(self,
                         text = "Bill: ")
        bill_lbl.grid(row = 1,
                      column = 0,
                      columnspan = 1,
                      sticky = W)
        #Create an Entry field.
        ## Create a StringVar and link it to the entry box
        self.billvar = StringVar()
        bill_ent = Entry(self, textvariable = self.billvar)
        bill_ent.grid(row = 1,
                      column = 1,
                      sticky = W)
        #Create a Button for how many people will be paying on the bill
        #Create label
        people_paying_lbl = Label(self,
                                  text = "How many people are paying on this bill?: ")
        people_paying_lbl.grid(row = 2,
                               column = 0,
                               columnspan = 1,
                               sticky = W)
        #Create an entry field
        ## Create a StringVar and link it to the entry box
        self.pplvar = StringVar()
        people_paying_ent = Entry(self, textvariable = self.pplvar)
        people_paying_ent.grid(row = 2,
                               column = 1,
                               sticky = W)
        #Create a text box to display the totals in
        ## This had to be self.bill_total_txt, to be able to put text in it from the total function
        self.bill_total_txt = Text(self,
                              height = 10,
                              width = 40,
                              wrap = WORD)
        self.bill_total_txt.grid(row = 3,
                            column = 0,
                            columnspan = 2,
                            sticky = W)
        #Create a Submit button
        submit = Button(self,
                        text = "Submit",
                        command = self.total)
        submit.grid(row = 4,
                    column = 0,
                    sticky = W)

    def total(self):
        """ Takes the values from Bill, and # of people to get the amount that will be
        displayed in the text box."""
        TAX = .15
        ## Try to convert the bill to a float and the number of people to an integer
        try:
            bill = float(self.billvar.get())
            people = int(self.pplvar.get())
        ## If something goes wrong tell the user the input is invalid
        except:
            self.bill_total_txt.delete(0.0, END)
            self.bill_total_txt.insert(0.0, 'Invalid input')
        ## If the conversion was possible, calculate the tip, the total amount and the amout per person and format them as a string with two decimals
        ## Then create the complete message as a list and join it togeather when writing it to the textbox
        else:
            tip = "%.2f" % (TAX * bill)
            tot = "%.2f" % (TAX * bill + bill)
            tot_pp = "%.2f" % ((TAX * bill + bill) / people)
            Total = ["The tip is: $", tip,
                     "\nThe total for the bill is: $",
                     tot,
                     " divided among the people paying equally is: $",
                     tot_pp,
                     " per person."]
            self.bill_total_txt.delete(0.0, END)
            self.bill_total_txt.insert(0.0, ''.join(Total))





#Starting the Program
root = Tk()
root.title("Tip Calculator")
app = Calculator(root)
root.mainloop()
