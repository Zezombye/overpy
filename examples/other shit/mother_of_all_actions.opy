#Global variables

#!define Board B
#!define Filtered F
#!define Index I


#Player variables

#!define Heros H
#!define Selected M


@Rule "Filtered Index Array"
@Event eachPlayer
Filtered = [i for i in Index

#King
if eventPlayer.Heros[0] == Board[M[0]] 
and        i % 8 + 1 == M[0] % 8 and floor(i / 8) + 1 == floor(M[0] / 8)
        or i % 8 + 1 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8)
        or i % 8 + 1 == M[0] % 8 and floor(i / 8) - 1 == floor(M[0] / 8)
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 1 == floor(M[0] / 8)
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 1 == floor(M[0] / 8)
        or i % 8 - 1 == M[0] % 8 and floor(i / 8) + 1 == floor(M[0] / 8)
        or i % 8 - 1 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8)
           i % 8 - 1 == M[0] % 8 and floor(i / 8) - 1 == floor(M[0] / 8)

#Queen
or eventPlayer.Heros[1] == Board[M[0]] 
and        
	and    i % 8 + 7 == M[0] % 8 and floor(i / 8) + 7 == floor(M[0] / 8) and M[i + 1*6 + 8*6] == 0 and M[i + 1*5 + 8*5] == 0 and M[i + 1*4 + 8*4] == 0 and M[i + 1*3 + 8*3] == 0 and M[i + 1*2 + 8*2] == 0 and M[i + 1*1 + 8*1] == 0 
		or i % 8 + 6 == M[0] % 8 and floor(i / 8) + 6 == floor(M[0] / 8) and M[i + 1*5 + 8*5] == 0 and M[i + 1*4 + 8*4] == 0 and M[i + 1*3 + 8*3] == 0 and M[i + 1*2 + 8*2] == 0 and M[i + 1*1 + 8*1] == 0 
		or i % 8 + 5 == M[0] % 8 and floor(i / 8) + 5 == floor(M[0] / 8) and M[i + 1*4 + 8*4] == 0 and M[i + 1*3 + 8*3] == 0 and M[i + 1*2 + 8*2] == 0 and M[i + 1*1 + 8*1] == 0 
		or i % 8 + 4 == M[0] % 8 and floor(i / 8) + 4 == floor(M[0] / 8) and M[i + 1*3 + 8*3] == 0 and M[i + 1*2 + 8*2] == 0 and M[i + 1*1 + 8*1] == 0 
		or i % 8 + 3 == M[0] % 8 and floor(i / 8) + 3 == floor(M[0] / 8) and M[i + 1*2 + 8*2] == 0 and M[i + 1*1 + 8*1] == 0 
		or i % 8 + 2 == M[0] % 8 and floor(i / 8) + 2 == floor(M[0] / 8) and M[i + 1*1 + 8*1] == 0 
		or i % 8 + 1 == M[0] % 8 and floor(i / 8) + 1 == floor(M[0] / 8)
		    true
	and    i % 8 - 7 == M[0] % 8 and floor(i / 8) + 7 == floor(M[0] / 8) and M[i - 1*6 + 8*6] == 0 and M[i - 1*5 + 8*5] == 0 and M[i - 1*4 + 8*4] == 0 and M[i - 1*3 + 8*3] == 0 and M[i - 1*2 + 8*2] == 0 and M[i - 1*1 + 8*1] == 0 
		or i % 8 - 6 == M[0] % 8 and floor(i / 8) + 6 == floor(M[0] / 8) and M[i - 1*5 + 8*5] == 0 and M[i - 1*4 + 8*4] == 0 and M[i - 1*3 + 8*3] == 0 and M[i - 1*2 + 8*2] == 0 and M[i - 1*1 + 8*1] == 0 
		or i % 8 - 5 == M[0] % 8 and floor(i / 8) + 5 == floor(M[0] / 8) and M[i - 1*4 + 8*4] == 0 and M[i - 1*3 + 8*3] == 0 and M[i - 1*2 + 8*2] == 0 and M[i - 1*1 + 8*1] == 0 
		or i % 8 - 4 == M[0] % 8 and floor(i / 8) + 4 == floor(M[0] / 8) and M[i - 1*3 + 8*3] == 0 and M[i - 1*2 + 8*2] == 0 and M[i - 1*1 + 8*1] == 0 
		or i % 8 - 3 == M[0] % 8 and floor(i / 8) + 3 == floor(M[0] / 8) and M[i - 1*2 + 8*2] == 0 and M[i - 1*1 + 8*1]	== 0 
		or i % 8 - 2 == M[0] % 8 and floor(i / 8) + 2 == floor(M[0] / 8) and M[i - 1*1 + 8*1] == 0 
		or i % 8 - 1 == M[0] % 8 and floor(i / 8) + 1 == floor(M[0] / 8)
		    true
	and    i % 8 - 7 == M[0] % 8 and floor(i / 8) - 7 == floor(M[0] / 8) and M[i - 1*6 - 8*6] == 0 and M[i - 1*5 - 8*5] == 0 and M[i - 1*4 - 8*4] == 0 and M[i - 1*3 - 8*3] == 0 and M[i - 1*2 - 8*2] == 0 and M[i - 1*1 - 8*1] == 0 
		or i % 8 - 6 == M[0] % 8 and floor(i / 8) - 6 == floor(M[0] / 8) and M[i - 1*5 - 8*5] == 0 and M[i - 1*4 - 8*4] == 0 and M[i - 1*3 - 8*3] == 0 and M[i - 1*2 - 8*2] == 0 and M[i - 1*1 - 8*1] == 0 
		or i % 8 - 5 == M[0] % 8 and floor(i / 8) - 5 == floor(M[0] / 8) and M[i - 1*4 - 8*4] == 0 and M[i - 1*3 - 8*3] == 0 and M[i - 1*2 - 8*2] == 0 and M[i - 1*1 - 8*1] == 0 
		or i % 8 - 4 == M[0] % 8 and floor(i / 8) - 4 == floor(M[0] / 8) and M[i - 1*3 - 8*3] == 0 and M[i - 1*2 - 8*2] == 0 and M[i - 1*1 - 8*1] == 0 
		or i % 8 - 3 == M[0] % 8 and floor(i / 8) - 3 == floor(M[0] / 8) and M[i - 1*2 - 8*2] == 0 and M[i - 1*1 - 8*1] == 0
		or i % 8 - 2 == M[0] % 8 and floor(i / 8) - 2 == floor(M[0] / 8) and M[i - 1*1 - 8*1] == 0
		or i % 8 - 1 == M[0] % 8 and floor(i / 8) - 1 == floor(M[0] / 8)
		    true
		   i % 8 + 7 == M[0] % 8 and floor(i / 8) - 7 == floor(M[0] / 8) and M[i + 1*5 - 8*6] == 0 and M[i + 1*4 - 8*5] == 0 and M[i + 1*3 - 8*4] == 0 and M[i + 1*3 - 8*3] == 0 and M[i + 1*2 - 8*2] == 0 and M[i + 1*1 - 8*1] == 0 
		or i % 8 + 6 == M[0] % 8 and floor(i / 8) - 6 == floor(M[0] / 8) and M[i + 1*4 - 8*5] == 0 and M[i + 1*3 - 8*4] == 0 and M[i + 1*3 - 8*3] == 0 and M[i + 1*2 - 8*2] == 0 and M[i + 1*1 - 8*1] == 0
		or i % 8 + 5 == M[0] % 8 and floor(i / 8) - 5 == floor(M[0] / 8) and M[i + 1*3 - 8*4] == 0 and M[i + 1*3 - 8*3] == 0 and M[i + 1*2 - 8*2] == 0 and M[i + 1*1 - 8*1] == 0
		or i % 8 + 4 == M[0] % 8 and floor(i / 8) - 4 == floor(M[0] / 8) and M[i + 1*3 - 8*3] == 0 and M[i + 1*2 - 8*2] == 0 and M[i + 1*1 - 8*1] == 0
		or i % 8 + 3 == M[0] % 8 and floor(i / 8) - 3 == floor(M[0] / 8) and M[i + 1*2 - 8*2] == 0 and M[i + 1*1 - 8*1] == 0
		or i % 8 + 2 == M[0] % 8 and floor(i / 8) - 2 == floor(M[0] / 8) and M[i + 1*1 - 8*1] == 0
		or i % 8 + 1 == M[0] % 8 and floor(i / 8) - 1 == floor(M[0] / 8)
		    true
		or 
		and     
        and    i % 8 - 7 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*6] == 0 and M[i - 8*5] == 0 and M[i - 8*4] == 0 and M[i - 8*3] == 0 and M[i - 8*2] == 0 and M[i - 8*1] == 0
            or i % 8 - 6 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*5] == 0 and M[i - 8*4] == 0 and M[i - 8*3] == 0 and M[i - 8*2] == 0 and M[i - 8*1] == 0
            or i % 8 - 5 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*4] == 0 and M[i - 8*3] == 0 and M[i - 8*2] == 0 and M[i - 8*1] == 0
            or i % 8 - 4 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*3] == 0 and M[i - 8*2] == 0 and M[i - 8*1] == 0
            or i % 8 - 3 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*2] == 0 and M[i - 8*1] == 0
            or i % 8 - 2 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*1] == 0
            or i % 8 - 1 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8)
               true
        and    i % 8 + 7 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*6] == 0 and M[i + 8*5] == 0 and M[i + 8*4] == 0 and M[i + 8*3] == 0 and M[i + 8*2] == 0 and M[i + 8*1] == 0    
            or i % 8 + 6 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*5] == 0 and M[i + 8*4] == 0 and M[i + 8*3] == 0 and M[i + 8*2] == 0 and M[i + 8*1] == 0
            or i % 8 + 5 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*4] == 0 and M[i + 8*3] == 0 and M[i + 8*2] == 0 and M[i + 8*1] == 0
            or i % 8 + 4 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*3] == 0 and M[i + 8*2] == 0 and M[i + 8*1] == 0
            or i % 8 + 3 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*2] == 0 and M[i + 8*1] == 0
            or i % 8 + 2 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*1] == 0
            or i % 8 + 1 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) 
               true
        and    i % 8 + 0 == M[0] % 8 and floor(i / 8) - 7 == floor(M[0] / 8) and M[i - 6] == 0 and M[i - 5] == 0 and M[i - 4] == 0 and M[i - 3] == 0 and M[i - 2] == 0 and M[i - 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 6 == floor(M[0] / 8) and M[i - 5] == 0 and M[i - 4] == 0 and M[i - 3] == 0 and M[i - 2] == 0 and M[i - 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 5 == floor(M[0] / 8) and M[i - 4] == 0 and M[i - 3] == 0 and M[i - 2] == 0 and M[i - 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 4 == floor(M[0] / 8) and M[i - 3] == 0 and M[i - 2] == 0 and M[i - 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 3 == floor(M[0] / 8) and M[i - 2] == 0 and M[i - 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 2 == floor(M[0] / 8) and M[i - 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 1 == floor(M[0] / 8) 
               true
               i % 8 + 0 == M[0] % 8 and floor(i / 8) + 7 == floor(M[0] / 8) and M[i + 6] == 0 and M[i + 5] == 0 and M[i + 4] == 0 and M[i + 3] == 0 and M[i + 2] == 0 and M[i + 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 6 == floor(M[0] / 8) and M[i + 5] == 0 and M[i + 4] == 0 and M[i + 3] == 0 and M[i + 2] == 0 and M[i + 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 5 == floor(M[0] / 8) and M[i + 4] == 0 and M[i + 3] == 0 and M[i + 2] == 0 and M[i + 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 4 == floor(M[0] / 8) and M[i + 3] == 0 and M[i + 2] == 0 and M[i + 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 3 == floor(M[0] / 8) and M[i + 2] == 0 and M[i + 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 2 == floor(M[0] / 8) and M[i + 1] == 0
            or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 1 == floor(M[0] / 8) 
               true

#Bishop
or eventPlayer.Heros[2] == Board[M[0]] 
and            i % 8 + 7 == M[0] % 8 and floor(i / 8) + 7 == floor(M[0] / 8) and M[i + 1*6 + 8*6] == 0 and M[i + 1*5 + 8*5] == 0 and M[i + 1*4 + 8*4] == 0 and M[i + 1*3 + 8*3] == 0 and M[i + 1*2 + 8*2] == 0 and M[i + 1*1 + 8*1] == 0 
            or i % 8 + 6 == M[0] % 8 and floor(i / 8) + 6 == floor(M[0] / 8) and M[i + 1*5 + 8*5] == 0 and M[i + 1*4 + 8*4] == 0 and M[i + 1*3 + 8*3] == 0 and M[i + 1*2 + 8*2] == 0 and M[i + 1*1 + 8*1] == 0
            or i % 8 + 5 == M[0] % 8 and floor(i / 8) + 5 == floor(M[0] / 8) and M[i + 1*4 + 8*4] == 0 and M[i + 1*3 + 8*3] == 0 and M[i + 1*2 + 8*2] == 0 and M[i + 1*1 + 8*1] == 0
            or i % 8 + 4 == M[0] % 8 and floor(i / 8) + 4 == floor(M[0] / 8) and M[i + 1*3 + 8*3] == 0 and M[i + 1*2 + 8*2] == 0 and M[i + 1*1 + 8*1] == 0
            or i % 8 + 3 == M[0] % 8 and floor(i / 8) + 3 == floor(M[0] / 8) and M[i + 1*2 + 8*2] == 0 and M[i + 1*1 + 8*1] == 0
            or i % 8 + 2 == M[0] % 8 and floor(i / 8) + 2 == floor(M[0] / 8) and M[i + 1*1 + 8*1] == 0
            or i % 8 + 1 == M[0] % 8 and floor(i / 8) + 1 == floor(M[0] / 8)
                true
        and    i % 8 - 7 == M[0] % 8 and floor(i / 8) + 7 == floor(M[0] / 8) and M[i - 1*6 + 8*6] == 0 and M[i - 1*5 + 8*5] == 0 and M[i - 1*4 + 8*4] == 0 and M[i - 1*3 + 8*3] == 0 and M[i - 1*2 + 8*2] == 0 and M[i - 1*1 + 8*1] == 0
            or i % 8 - 6 == M[0] % 8 and floor(i / 8) + 6 == floor(M[0] / 8) and M[i - 1*5 + 8*5] == 0 and M[i - 1*4 + 8*4] == 0 and M[i - 1*3 + 8*3] == 0 and M[i - 1*2 + 8*2] == 0 and M[i - 1*1 + 8*1] == 0
            or i % 8 - 5 == M[0] % 8 and floor(i / 8) + 5 == floor(M[0] / 8) and M[i - 1*4 + 8*4] == 0 and M[i - 1*3 + 8*3] == 0 and M[i - 1*2 + 8*2] == 0 and M[i - 1*1 + 8*1] == 0
            or i % 8 - 4 == M[0] % 8 and floor(i / 8) + 4 == floor(M[0] / 8) and M[i - 1*3 + 8*3] == 0 and M[i - 1*2 + 8*2] == 0 and M[i - 1*1 + 8*1] == 0
            or i % 8 - 3 == M[0] % 8 and floor(i / 8) + 3 == floor(M[0] / 8) and M[i - 1*2 + 8*2] == 0 and M[i - 1*1 + 8*1] == 0
            or i % 8 - 2 == M[0] % 8 and floor(i / 8) + 2 == floor(M[0] / 8) and M[i - 1*1 + 8*1] == 0
            or i % 8 - 1 == M[0] % 8 and floor(i / 8) + 1 == floor(M[0] / 8)
                true
        and    i % 8 - 7 == M[0] % 8 and floor(i / 8) - 7 == floor(M[0] / 8) and M[i - 1*6 - 8*6] == 0 and M[i - 1*5 - 8*5] == 0 and M[i - 1*4 - 8*4] == 0 and M[i - 1*3 - 8*3] == 0 and M[i - 1*2 - 8*2] == 0 and M[i - 1*1 - 8*1] == 0
            or i % 8 - 6 == M[0] % 8 and floor(i / 8) - 6 == floor(M[0] / 8) and M[i - 1*5 - 8*5] == 0 and M[i - 1*4 - 8*4] == 0 and M[i - 1*3 - 8*3] == 0 and M[i - 1*2 - 8*2] == 0 and M[i - 1*1 - 8*1] == 0
            or i % 8 - 5 == M[0] % 8 and floor(i / 8) - 5 == floor(M[0] / 8) and M[i - 1*4 - 8*4] == 0 and M[i - 1*3 - 8*3] == 0 and M[i - 1*2 - 8*2] == 0 and M[i - 1*1 - 8*1] == 0
            or i % 8 - 4 == M[0] % 8 and floor(i / 8) - 4 == floor(M[0] / 8) and M[i - 1*3 - 8*3] == 0 and M[i - 1*2 - 8*2] == 0 and M[i - 1*1 - 8*1] == 0
            or i % 8 - 3 == M[0] % 8 and floor(i / 8) - 3 == floor(M[0] / 8) and M[i - 1*2 - 8*2] == 0 and M[i - 1*1 - 8*1] == 0
            or i % 8 - 2 == M[0] % 8 and floor(i / 8) - 2 == floor(M[0] / 8) and M[i - 1*1 - 8*1] == 0
            or i % 8 - 1 == M[0] % 8 and floor(i / 8) - 1 == floor(M[0] / 8)
                true
               i % 8 + 7 == M[0] % 8 and floor(i / 8) - 7 == floor(M[0] / 8) and M[i + 1*5 - 8*6] == 0 and M[i + 1*4 - 8*5] == 0 and M[i + 1*3 - 8*4] == 0 and M[i + 1*3 - 8*3] == 0 and M[i + 1*2 - 8*2] == 0 and M[i + 1*1 - 8*1] == 0
            or i % 8 + 6 == M[0] % 8 and floor(i / 8) - 6 == floor(M[0] / 8) and M[i + 1*4 - 8*5] == 0 and M[i + 1*3 - 8*4] == 0 and M[i + 1*3 - 8*3] == 0 and M[i + 1*2 - 8*2] == 0 and M[i + 1*1 - 8*1] == 0
            or i % 8 + 5 == M[0] % 8 and floor(i / 8) - 5 == floor(M[0] / 8) and M[i + 1*3 - 8*4] == 0 and M[i + 1*3 - 8*3] == 0 and M[i + 1*2 - 8*2] == 0 and M[i + 1*1 - 8*1] == 0
            or i % 8 + 4 == M[0] % 8 and floor(i / 8) - 4 == floor(M[0] / 8) and M[i + 1*3 - 8*3] == 0 and M[i + 1*2 - 8*2] == 0 and M[i + 1*1 - 8*1] == 0
            or i % 8 + 3 == M[0] % 8 and floor(i / 8) - 3 == floor(M[0] / 8) and M[i + 1*2 - 8*2] == 0 and M[i + 1*1 - 8*1] == 0
            or i % 8 + 2 == M[0] % 8 and floor(i / 8) - 2 == floor(M[0] / 8) and M[i + 1*1 - 8*1] == 0
            or i % 8 + 1 == M[0] % 8 and floor(i / 8) - 1 == floor(M[0] / 8)
                true

#Knight
or eventPlayer.Heros[3] == Board[M[0]] 
and        i % 8 + 2 == M[0] % 8 and floor(i / 8) + 1 == floor(M[0] / 8)
        or i % 8 + 2 == M[0] % 8 and floor(i / 8) - 1 == floor(M[0] / 8)
        or i % 8 - 2 == M[0] % 8 and floor(i / 8) + 1 == floor(M[0] / 8)
        or i % 8 - 2 == M[0] % 8 and floor(i / 8) - 1 == floor(M[0] / 8)
        or i % 8 + 1 == M[0] % 8 and floor(i / 8) + 2 == floor(M[0] / 8)
        or i % 8 - 1 == M[0] % 8 and floor(i / 8) + 2 == floor(M[0] / 8)
        or i % 8 + 1 == M[0] % 8 and floor(i / 8) - 2 == floor(M[0] / 8)
           i % 8 - 1 == M[0] % 8 and floor(i / 8) - 2 == floor(M[0] / 8)

#Rook
or eventPlayer.Heros[4] == Board[M[0]] 
and     
    and    i % 8 - 7 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*6] == 0 and M[i - 8*5] == 0 and M[i - 8*4] == 0 and M[i - 8*3] == 0 and M[i - 8*2] == 0 and M[i - 8*1] == 0
        or i % 8 - 6 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*5] == 0 and M[i - 8*4] == 0 and M[i - 8*3] == 0 and M[i - 8*2] == 0 and M[i - 8*1] == 0
        or i % 8 - 5 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*4] == 0 and M[i - 8*3] == 0 and M[i - 8*2] == 0 and M[i - 8*1] == 0
        or i % 8 - 4 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*3] == 0 and M[i - 8*2] == 0 and M[i - 8*1] == 0
        or i % 8 - 3 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*2] == 0 and M[i - 8*1] == 0
        or i % 8 - 2 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i - 8*1] == 0
        or i % 8 - 1 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8)
           true
    and    i % 8 + 7 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*6] == 0 and M[i + 8*5] == 0 and M[i + 8*4] == 0 and M[i + 8*3] == 0 and M[i + 8*2] == 0 and M[i + 8*1] == 0    
        or i % 8 + 6 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*5] == 0 and M[i + 8*4] == 0 and M[i + 8*3] == 0 and M[i + 8*2] == 0 and M[i + 8*1] == 0
        or i % 8 + 5 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*4] == 0 and M[i + 8*3] == 0 and M[i + 8*2] == 0 and M[i + 8*1] == 0
        or i % 8 + 4 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*3] == 0 and M[i + 8*2] == 0 and M[i + 8*1] == 0
        or i % 8 + 3 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*2] == 0 and M[i + 8*1] == 0
        or i % 8 + 2 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) and M[i + 8*1] == 0
        or i % 8 + 1 == M[0] % 8 and floor(i / 8) + 0 == floor(M[0] / 8) 
           true
    and    i % 8 + 0 == M[0] % 8 and floor(i / 8) - 7 == floor(M[0] / 8) and M[i - 6] == 0 and M[i - 5] == 0 and M[i - 4] == 0 and M[i - 3] == 0 and M[i - 2] == 0 and M[i - 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 6 == floor(M[0] / 8) and M[i - 5] == 0 and M[i - 4] == 0 and M[i - 3] == 0 and M[i - 2] == 0 and M[i - 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 5 == floor(M[0] / 8) and M[i - 4] == 0 and M[i - 3] == 0 and M[i - 2] == 0 and M[i - 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 4 == floor(M[0] / 8) and M[i - 3] == 0 and M[i - 2] == 0 and M[i - 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 3 == floor(M[0] / 8) and M[i - 2] == 0 and M[i - 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 2 == floor(M[0] / 8) and M[i - 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) - 1 == floor(M[0] / 8) 
           true
           i % 8 + 0 == M[0] % 8 and floor(i / 8) + 7 == floor(M[0] / 8) and M[i + 6] == 0 and M[i + 5] == 0 and M[i + 4] == 0 and M[i + 3] == 0 and M[i + 2] == 0 and M[i + 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 6 == floor(M[0] / 8) and M[i + 5] == 0 and M[i + 4] == 0 and M[i + 3] == 0 and M[i + 2] == 0 and M[i + 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 5 == floor(M[0] / 8) and M[i + 4] == 0 and M[i + 3] == 0 and M[i + 2] == 0 and M[i + 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 4 == floor(M[0] / 8) and M[i + 3] == 0 and M[i + 2] == 0 and M[i + 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 3 == floor(M[0] / 8) and M[i + 2] == 0 and M[i + 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 2 == floor(M[0] / 8) and M[i + 1] == 0
        or i % 8 + 0 == M[0] % 8 and floor(i / 8) + 1 == floor(M[0] / 8) 
           true


#Pawn
or eventPlayer.Heros[5] == Board[M[0]] 
]