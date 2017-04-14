
New baby tracking app: GO EAT SLEEP

Mothers Little Helper

Track your brand new baby's eating, elimination and sleep.
![project2](https://github.com/Shazalyn/mothers_little_helper/blob/master/images/carterJason.png)

*********************************************************
User Story

    Have a brand new baby? 
    
    Sign up for tracking your baby's eating, sleeping and elimination.
    
    Login to access the activity page
    
    submit activity under GO EAT SLEEP for your child
    
    query activity to see and print recaps of activity.
*******************************************

MoSCoW
********************************
Must haves:
    tracking for eating, sleeping and elimination (go);
    
    api to export info to external page(.csv)

Should have:

    indicate R or L on milk
    
    timer option for sleep and feeding
    
    write in line for poo description
    

Could have:

    api link to order supplies
    
    graphing of trends
    
    multiple births(TWINS!)
    
    Temperature tracker
    
    baby wieght tracker to compare to an API of baby % stats
    
    Sick baby tracking
    
    parent name, stats(dob, etc)

Would have:

    Meme and coloring options
    
    Customize with photo of child
    
******************************************************
CRUD:

C-'create' route of '/signup'

R-'retrieve' route of '/login'

U-'update' route of '/activity'

D-'delete' *i am not looking to delete records as part of this project

*******************************************************
tables:

child has an email, a password, and a kid_name

    sleep has a day, sleep time start, sleep time end, and foriegn key to connect to child

    go has a day, go time, pee, poo

    eat has a day, eat time, formula amt, milk amount
https://github.com/Shazalyn/mothers_little_helper/blob/master/images/IMG_20170413_150934.jpg

