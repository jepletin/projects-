#  Tax Calculator

A simple JavaScript program that asks the user for their **gross monthly salary** and works out their **PAYE (tax)** based on salary bands.


##  What This Program Does
1.  Keeps asking the user (via `prompt`) to enter a gross salary.
2.  Checks if the entered value is a valid number greater than 0.
3.  If invalid, shows an alert and asks again.
4.  Once a valid salary is entered, it figures out which **tax band** the salary falls into.
5.  Calculates the PAYE based on that band's tax rate.
6.  Logs the result to the console.


##  Tax Bands Used
###### Tax Rate
0 – 24,000 KES 10%
24,000 – 32,333 KES 25%
32,334 – 500,000 KES 30% 
500,000 – 800,000 KES 32.5%
Above 800,000 KES35%

## Calculating NSSF (retirement contribution)**

 NSSF is calculated differently depending on how much someone earns, using "tiers":
If salary is 9,000 or less → 6% of the whole salary.
If salary is between 9,001 and 108,000 → 6% of the first 9,000, plus 6% of the remaining amount.
If salary is above 108,000 → NSSF is capped at a fixed amount (6,840).

## Working out taxable income

NSSF is not taxed, so it's subtracted from gross salary first.
What's left is called "taxable income" — this is the amount used to calculate tax.

##   Calculating PAYE (income tax)

Kenya taxes income in "bands" — different portions of income are taxed at increasing rates (10%, 25%, 30%, 32.5%, 35%).
The program checks which band the taxable income falls into and adds up the tax owed across all the bands below it.

## Calculating SHIF (health insurance contribution)**

This is a  2.75% of the gross salary.

## Calculating Housing Levy

This is a  1.5% of the gross salary.

##  Applying personal relief

Every employee gets a fixed tax discount of 2,400 (called "personal relief").
This is subtracted from the PAYE tax calculated earlier.


##  Total deductions

This adds up everything taken from the salary: final PAYE + NSSF + SHIF + Housing Levy.

##  Net pay (take-home pay

 This is what's left after deductions are removed from the gross salary.
