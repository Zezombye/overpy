#!mainFile "meipocalypse.opy"

globalvar heroUnlockLocations = [
    vect(0, -1000, 0), #0. Reaper   
    vect(-25.06, 17, -20.44), #1. Tracer   
    vect(-23.64, 22, 74.91), #2. Mercy    
    vect(0, -1000, 0), #3. Hanzo    
    vect(0, -1000, 0), #4. Torbjorn 
    vect(-24, 21, -80.09), #5. Reinhardt
    vect(0, -1000, 0), #6. Pharah   
    vect(0, -1000, 0), #7. Winston  
    vect(-71.68, 11.14, -47.91), #8. Widowmaker
    vect(0, -1000, 0), #9. Bastion  
    vect(0, -1000, 0), #10. Symmetra 
    vect(0, -1000, 0), #11. Zenyatta 
    vect(0, -1000, 0), #12. Genji    
    vect(0, -1000, 0), #13. Roadhog  
    vect(0, -1000, 0), #14. McCree   
    vect(0, -1000, 0), #15. Junkrat  
    vect(0, -1000, 0), #16. Zarya    
    vect(-73.27, 19.53, 0), #17. Soldier  
    vect(-23.87, 16, 39.98), #18. Lucio    
    vect(0, -1000, 0), #19. Dva      
    vect(0, -1000, 0), #20. Mei      
    vect(-73.29, 12.06, 35.53), #21. Sombra   
    vect(0, -1000, 0), #22. Doomfist 
    vect(0, -1000, 0), #23. Ana #default hero
    vect(-77.56, 15.10, -56.13), #24. Orisa    
    vect(-18.64, 13, 0), #25. Brigitte 
    vect(0, -1000, 0), #26. Moira    
    vect(0, -1000, 0), #27. Hammond  
    vect(-57.07, 19, -49.05), #28. Ashe     
    vect(0, -1000, 0), #29. Echo
    vect(0, -1000, 0), #30. Baptiste 
    vect(0, -1000, 0), #31. Sigma   
]
globalvar heroCosts = [
    0, #0. Reaper   
    3500, #1. Tracer   
    1000, #2. Mercy    
    0, #3. Hanzo    
    0, #4. Torbjorn 
    7000, #5. Reinhardt
    0, #6. Pharah   
    0, #7. Winston  
    6000, #8. Widowmaker
    0, #9. Bastion  
    0, #10. Symmetra 
    0, #11. Zenyatta 
    0, #12. Genji    
    0, #13. Roadhog  
    0, #14. McCree   
    0, #15. Junkrat  
    0, #16. Zarya    
    4000, #17. Soldier  
    1500, #18. Lucio    
    0, #19. Dva      
    0, #20. Mei      
    3000, #21. Sombra   
    0, #22. Doomfist 
    0, #23. Ana      
    5000, #24. Orisa    
    3000, #25. Brigitte 
    0, #26. Moira    
    0, #27. Hammond  
    6000, #28. Ashe     
    0, #29. Echo 
    0, #30. Baptiste 
    0, #31. Sigma    
]

globalvar unlockedHeroes = [Hero.BAPTISTE]

rule "generate hero unlock locations":
    for i in range(len(getAllHeroes())):
        createInWorldText(getAllPlayers(), "Buy {}: ${}".format(heroIcon(getAllHeroes()[evalOnce(i)]), heroCosts[evalOnce(i)]), heroUnlockLocations[evalOnce(i)]+vect(0,1,0), 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_AND_STRING, Color.LIME_GREEN, SpecVisibility.ALWAYS)

rule "unlock hero":
    @Event eachPlayer
    @Team 1
    @Condition gameStatus == GameStatus.IN_WAVE
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    @Condition not eventPlayer.isCrouching()
    @Condition not eventPlayer.isOob

    for eventPlayer.buyLoopIndex in range(len(getAllHeroes().exclude(unlockedHeroes))):
        if distance(eventPlayer.getPosition(), heroUnlockLocations[eventPlayer.buyLoopIndex]) < 1.3:
            goto found

    goto end
    found:
    if eventPlayer.money < heroCosts[eventPlayer.buyLoopIndex]:
        smallMessage(eventPlayer, "Not enough money")
        goto end

    unlockedHeroes.append(getAllHeroes()[eventPlayer.buyLoopIndex])
    bigMessage(getAllPlayers(), "{} unlocked {} {} for everyone".format(eventPlayer, heroIcon(getAllHeroes()[eventPlayer.buyLoopIndex]), getAllHeroes()[eventPlayer.buyLoopIndex]))

    end:
    wait(0.1)
    #todo unlock the hero
