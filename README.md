populate the db with some data:
the lazy/efficient way: generate some json data and then load it into the db
1. search for 'json generator' on google,
2. download the json generator,
3. run the generator to generate some json data,
    * in https://www.json-generator.com/ we can generate a json file with a bunch of random data
    * we repeat between 5-7 times,
    * generating some fields with random values
    * so we take jsongenerator.txt from StudentAssets folder and paste it into the generator
    * what the syntax say is: 
        * repeat 5 times
        * username is a female random name
        * gender: female
        * date of birth is in range
        * known as be the same as the username
        * random created date and last active date
        * lorem as introduction, looking for, and interests
        * random city and country
        * in photos (updating capital U and I in jsongenerator.txt):
            * the url is a random image from an image api
            * isMain is true
    * click on 'generate' 
    * coping to the clipboard
    * paste it in newly created file in API/Data/UserSeedData.json
    * this will help us create POCOs for the AppUser class
    * do the same with male users (change UserName, Gender, Photos.Url), add them to the array 

up next: get the data and put it in our db

