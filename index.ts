#! /user/bin/env node
import inquirer from "inquirer"; 
import chalk from "chalk";

let conditions = true;
let myBalance = 50000;
let myPin = 2005;

console.log(chalk.bgCyan("\n\t Welcome to Shaheer's ATM Machine\n"));

let pin = await inquirer.prompt([{
name: "PIN", 
Number,
message: "Please Enter Your PIN ( 2005 )"
}]);

if (pin.PIN == myPin) {console.log("\n\t\t   Login Succesfull");
console.log(chalk.green(`\n\t\tCurrent balance is ${myBalance}`));


while(conditions){
let userOperation = await inquirer.prompt([{
name: "Operation",
type: "list",
message:"Please select from the options below",    
choices: ["Withdraw", "Fast Cash", "Deposit", "Check Balance"]
}]);

if (userOperation.Operation == "Withdraw"){
    let withdrawAmount = await inquirer.prompt([{
name: "Withdrawl_Amount",
type: "number",
message: "Please Enter Your Amount",
    }]);

    if (withdrawAmount.Withdrawl_Amount <= myBalance)
    {myBalance -= withdrawAmount.Withdrawl_Amount;
        console.log(chalk.green(`\n\tAmount Rs ${withdrawAmount.Withdrawl_Amount} Withdrawn Succesfully.`));
        console.log(`\n\tYour Current Balance is Rs ${myBalance}. \n\n\t\t Thankyou!`);
    }
else {console.log(chalk.red(`\n\t\tInsufficient Balance!\n`))};
};


if (userOperation.Operation == "Check Balance"){console.log(chalk.green(`\nYour CUrrent Account Balance is Rs ${myBalance}. \n\n\t\t Thankyou!`));}

if (userOperation.Operation == "Fast Cash"){
 let fastCash = await inquirer.prompt([{
    name: "Fast_Cash_Amount",
    type: "list",
    choices: ["500", "1000", "2000", "5000", "10000", "20000"],
}]);

if (fastCash.Fast_Cash_Amount == 500){
if (fastCash.Fast_Cash_Amount <= myBalance)
{
    myBalance -= fastCash.Fast_Cash_Amount;
    console.log(chalk.green(`\nAmount Rs ${fastCash.Fast_Cash_Amount} Withdrawn Succesfully\n`));
    console.log(`Your Remaining Balance is ${myBalance}\n\n\t\t Thankyou!\n`);
}
else (console.log(chalk.red("\n\t\tInsufficient Balance!\n")));
};

if (fastCash.Fast_Cash_Amount == 1000){
    if (fastCash.Fast_Cash_Amount <= myBalance)
    {
        myBalance -= fastCash.Fast_Cash_Amount;
        console.log(chalk.green(`\nAmount Rs ${fastCash.Fast_Cash_Amount} Withdrawn Succesfully\n`));
        console.log(`\nYour Remaining Balance is ${myBalance}\n\n\t\t Thankyou!\n`);
    }
    else (console.log(chalk.red("\n\t\tInsufficient Balance!\n")));
    };


    if (fastCash.Fast_Cash_Amount == 2000){
        if (fastCash.Fast_Cash_Amount <= myBalance)
        {
            myBalance -= fastCash.Fast_Cash_Amount;
            console.log(chalk.green(`\nAmount Rs ${fastCash.Fast_Cash_Amount} Withdrawn Succesfully\n`));
            console.log(`Your Remaining Balance is ${myBalance}\n\n\t\t Thankyou!\n`);
        }
        else (console.log(chalk.red("\n\t\tInsufficient Balance!\n")));
        };
        
        if (fastCash.Fast_Cash_Amount == 20000){
            if (fastCash.Fast_Cash_Amount <= myBalance)
            {
                myBalance -= fastCash.Fast_Cash_Amount;
                console.log(chalk.green(`\nAmount Rs ${fastCash.Fast_Cash_Amount} Withdrawn Succesfully\n`));
                console.log(`Your Remaining Balance is ${myBalance}\n\n\t\t Thankyou!\n`);
            }
            else (console.log(chalk.red("\n\t\tInsufficient Balance!\n")));
            };

            if (fastCash.Fast_Cash_Amount == 5000){
                if (fastCash.Fast_Cash_Amount <= myBalance)
                {
                    myBalance -= fastCash.Fast_Cash_Amount;
                    console.log(chalk.green(`\nAmount Rs ${fastCash.Fast_Cash_Amount} Withdrawn Succesfully\n`));
                    console.log(`Your Remaining Balance is ${myBalance} \n\n\t\t Thankyou!\n`);
                }
                else (console.log(chalk.red("\n\t\tInsufficient Balance!\n")));
                };

                if (fastCash.Fast_Cash_Amount == 10000){
                    if (fastCash.Fast_Cash_Amount <= myBalance)
                    {
                        myBalance -= fastCash.Fast_Cash_Amount;
                        console.log(chalk.green(`\nAmount Rs ${fastCash.Fast_Cash_Amount} Withdrawn Succesfully\n`));
                        console.log(`Your Remaining Balance is ${myBalance} \n\n\t\t Thankyou!\n`);
                    }
                    else (console.log(chalk.red("\n\t\tInsufficient Balance!\n")));
                    };
};
    
if (userOperation.Operation == "Deposit"){console.log(chalk.blue("\nYou Have Rs 0 In Your Pocket, How You Gonna Deposit??? Well Thats None Of My Business, So Try Your Best...\n"));

let depositAmount = await inquirer.prompt([{
name: "Deposit_Amount",
type: "number",
message: "Please Enter The Amount You Want To Deposit",
}]);

myBalance += depositAmount.Deposit_Amount;
console.log(chalk.green(`\n\tYou Have Succesfully Desposited Rs ${depositAmount.Deposit_Amount} To Your Account.`));
console.log(`\n\tYour Current Account Balance is ${myBalance}`);
console.log(chalk.blue("\n\tNote: To Submit The Cash In Your Bank Account Just Put The Cash On Your Head And Laydown.\n\n\t\t\t\t\t\t Thankyou!"));}
let newTask = await inquirer.prompt([
    {
        name: "New_Task",
        type: "confirm",
        message: "Do You Want to Perform other Transactions?",
        default: "False"
    }
]);
conditions = newTask.New_Task;
}}

else console.log(chalk.red("\n\tIncorrect PIN"));
