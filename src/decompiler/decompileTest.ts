/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

var decompileTest = `
settings
{
	lobby
	{
		Max Team 1 Players: 0
		Max Team 2 Players: 1
	}

	modes
	{
		Assault
		{
			enabled maps
			{
			}
		}

		Control
		{
			enabled maps
			{
			}
		}

		Escort
		{
			enabled maps
			{
				Rialto
			}
		}

		Hybrid
		{
			enabled maps
			{
			}
		}

		General
		{
			Game Mode Start: Manual
			Hero Limit: Off
		}
	}

	heroes
	{
		General
		{
			McCree
			{
				Ammunition Clip Size Scalar: 500%
				Damage Dealt: 200%
				Movement Speed: 150%
				No Ammunition Requirement: On
			}

			Pharah
			{
				Hover Jets Unlimited Fuel: On
			}

			Roadhog
			{
				Chain Hook Cooldown Time: 0%
			}

			Widowmaker
			{
				Grappling Hook Cooldown Time: 0%
				Infinite Ultimate Duration: On
				Spawn With Ultimate Ready: On
			}

			Wrecking Ball
			{
				Roll Always Active: On
			}

			Zarya
			{
				Particle Barrier Cooldown Time: 0%
			}

			disabled heroes
			{
				Echo
			}
		}
	}
}

variables
{
	global:
		0: timer
		1: challenge
		2: nbPlayersKilled
		3: additionalTime
		4: timeTarget
}

subroutines
{
	0: countdownTimer
	1: nextChallenge
}

rule("Crunch time Jam entry by Zezombye - complete the tasks before time runs out!")
{
	event
	{
		Ongoing - Global;
	}
}

rule("timer")
{
	event
	{
		Ongoing - Global;
	}

	actions
	{
		Create HUD Text(All Players(All Teams), Global.timer, Null, Null, Top, 0, White, White, White, Visible To Sort Order and String,
			Visible Always);
		Global.timer = 5;
	}
}

rule("reset time")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Is Button Held(Host Player, Interact) == True;
	}

	actions
	{
		Global.timer = 0;
	}
}

rule("player got kill")
{
	event
	{
		Player Earned Elimination;
		All;
		All;
	}

	conditions
	{
		Attacker == Host Player;
	}

	actions
	{
		Global.nbPlayersKilled += 1;
	}
}

rule("countdown timer")
{
	event
	{
		Subroutine;
		countdownTimer;
	}

	actions
	{
		Set Status(Host Player, Null, Rooted, 9999);
		Set Ability 1 Enabled(Host Player, False);
		Set Ability 2 Enabled(Host Player, False);
		Set Ultimate Ability Enabled(Host Player, Hero Of(Host Player) == Hero(Widowmaker));
		Set Primary Fire Enabled(Host Player, False);
		Set Secondary Fire Enabled(Host Player, False);
		Global.timeTarget = Global.timer + Global.additionalTime;
		Chase Global Variable Over Time(timer, Global.timeTarget, 2, None);
		Small Message(All Players(All Teams), 3);
		Wait(1, Ignore Condition);
		Small Message(All Players(All Teams), 2);
		Wait(1, Ignore Condition);
		Small Message(All Players(All Teams), 1);
		Wait(1, Ignore Condition);
		Stop Chasing Global Variable(timer);
		Chase Global Variable At Rate(timer, 0, 1, None);
		Small Message(All Players(All Teams), Custom String("Go!"));
		Clear Status(Host Player, Rooted);
	}
}

rule("challenge finished")
{
	event
	{
		Subroutine;
		nextChallenge;
	}

	actions
	{
		Destroy All Effects;
		Destroy All Dummy Bots;
		Stop Chasing Global Variable(timer);
		Global.nbPlayersKilled = 0;
		Global.challenge += 1;
	}
}

rule("player spawned in")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Has Spawned(Host Player) == True;
	}

	actions
	{
		Wait(1, Ignore Condition);
		Global.challenge = 1;
		Set Objective Description(All Players(All Teams), Custom String("Challenge {0}", Global.challenge),
			Visible To Sort Order and String);
		Global.nbPlayersKilled = 0;
	}
}

rule("challenge 1")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.challenge == 1;
	}

	actions
	{
		Teleport(Host Player, Vector(116.110, -1.220, -21));
		Set Facing(Host Player, Vector(1, 0, 0), To World);
		Big Message(Host Player, Custom String("Get to the vortex!"));
		Global.additionalTime = 5;
		Start Forcing Player To Be Hero(Host Player, Hero(Lúcio));
		Create Effect(All Players(All Teams), Bad Aura, Green, Vector(144, 9, -21), 2, Visible To Position and Radius);
		Call Subroutine(countdownTimer);
		Set Ability 1 Enabled(Host Player, True);
		Set Ability 2 Enabled(Host Player, True);
	}
}

rule("challenge 1 finished")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.challenge == 1;
		Distance Between(Position Of(Host Player), Vector(144, 9, -21)) < 2;
	}

	actions
	{
		Call Subroutine(nextChallenge);
	}
}

rule("challenge 2")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.challenge == 2;
	}

	actions
	{
		Teleport(Host Player, Vector(96.450, -1.410, -21));
		Set Facing(Host Player, Vector(-1, 0, 0), To World);
		Big Message(Host Player, Custom String("Hook em all!"));
		Start Forcing Player To Be Hero(Host Player, Hero(Roadhog));
		Global.additionalTime = 10;
		Create Dummy Bot(Hero(Reinhardt), Team 1, -1, Vector(81.960, -1.320, -23.800), Vector(1, 0, 0));
		Create Dummy Bot(Hero(Reinhardt), Team 1, -1, Vector(81.960, -1.320, -21.060), Vector(1, 0, 0));
		Create Dummy Bot(Hero(Reinhardt), Team 1, -1, Vector(81.960, -1.320, -18.340), Vector(1, 0, 0));
		Create Dummy Bot(Hero(Zarya), Team 1, -1, Vector(80.050, -1.400, -19.820), Vector(1, 0, 0));
		Create Dummy Bot(Hero(Zarya), Team 1, -1, Vector(80.050, -1.400, -22.720), Vector(1, 0, 0));
		Create Dummy Bot(Hero(Zarya), Team 1, -1, Vector(84.730, -1.360, -21), Vector(1, 0, 0));
		Call Subroutine(countdownTimer);
		Set Ability 1 Enabled(Host Player, True);
	}
}

rule("challenge 2 dummies - rein")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		Reinhardt;
	}

	conditions
	{
		Global.challenge == 2;
	}

	actions
	{
		Start Holding Button(Event Player, Secondary Fire);
		Wait(2, Ignore Condition);
		Stop Holding Button(Event Player, Secondary Fire);
		Wait(2, Ignore Condition);
		Loop If Condition Is True;
	}
}

rule("challenge 2 dummies - zarya")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		Zarya;
	}

	conditions
	{
		Global.challenge == 2;
	}

	actions
	{
		Wait(2, Ignore Condition);
		Press Button(Event Player, Ability 1);
		Wait(2, Ignore Condition);
		Loop If Condition Is True;
	}
}

rule("challenge 2 finished")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.challenge == 2;
		Global.nbPlayersKilled == 6;
	}

	actions
	{
		Call Subroutine(nextChallenge);
	}
}

rule("challenge 3")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.challenge == 3;
	}

	actions
	{
		Teleport(Host Player, Vector(20.510, 1.610, -68.870));
		Set Facing(Host Player, Vector(-1, 0, 0), To World);
		Big Message(Host Player, Custom String("Kill em all (hold rclick)!"));
		Start Forcing Player To Be Hero(Host Player, Hero(McCree));
		Global.additionalTime = 10;
		Call Subroutine(countdownTimer);
		Set Secondary Fire Enabled(Host Player, True);
		Set Primary Fire Enabled(Host Player, True);
		Set Ability 1 Enabled(Host Player, True);
		Set Ability 2 Enabled(Host Player, True);
		Create Dummy Bot(Hero(Wrecking Ball), Team 1, -1, Vector(2.120, 5.740, -69.480), Vector(0, 0, 0));
		Create Dummy Bot(Hero(Wrecking Ball), Team 1, -1, Vector(2.120, 5.740, -72.610), Vector(0, 0, 0));
		Create Dummy Bot(Hero(Wrecking Ball), Team 1, -1, Vector(2.120, 5.740, -54.410), Vector(0, 0, 0));
		Create Dummy Bot(Hero(Wrecking Ball), Team 1, -1, Vector(14, -1.250, -53), Vector(0, 0, 0));
		Create Dummy Bot(Hero(Wrecking Ball), Team 1, -1, Vector(31.370, -0.250, -58.230), Vector(0, 0, 0));
		Create Dummy Bot(Hero(Wrecking Ball), Team 1, -1, Vector(33.970, 6.750, -66.660), Vector(0, 0, 0));
	}
}

rule("challenge 3 stun")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.challenge == 3;
		Hero Of(Host Player) == Hero(McCree);
	}

	actions
	{
		Set Status(Host Player, Null, Knocked Down, 0.016);
		Wait(0.016, Ignore Condition);
		Loop If Condition Is True;
	}
}

rule("challenge 3 finished")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.challenge == 3;
		Global.nbPlayersKilled == 6;
	}

	actions
	{
		Call Subroutine(nextChallenge);
	}
}

rule("challenge 4")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.challenge == 4;
	}

	actions
	{
		Teleport(Host Player, Vector(-20, -1, -47.460));
		Set Facing(Host Player, Vector(0, 0, -1), To World);
		Big Message(Host Player, Custom String("Headshot Mondatta!"));
		Start Forcing Player To Be Hero(Host Player, Hero(Widowmaker));
		Global.additionalTime = 12;
		Call Subroutine(countdownTimer);
		Set Ability 1 Enabled(Host Player, True);
		Set Primary Fire Enabled(Host Player, True);
		Set Secondary Fire Enabled(Host Player, True);
		Create Dummy Bot(Hero(Zenyatta), Team 1, -1, Vector(-57, 2.800, -131.510), Vector(0, 0, 1));
		Create Dummy Bot(Hero(Reinhardt), Team 1, -1, Vector(-57.050, 2.800, -128.620), Vector(0, 0, 1));
		Create Dummy Bot(Hero(Reinhardt), Team 1, -1, Vector(-59.120, 2.800, -131.500), Vector(-1, 0, 0));
		Create Dummy Bot(Hero(Reinhardt), Team 1, -1, Vector(-57, 2.800, -134.540), Vector(0, 0, -1));
		Create Dummy Bot(Hero(Reinhardt), Team 1, -1, Vector(-55.110, 2.800, -131.510), Vector(1, 0, 0));
	}
}

rule("challenge 4 reins")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		Reinhardt;
	}

	conditions
	{
		Global.challenge == 4;
	}

	actions
	{
		Start Holding Button(Event Player, Secondary Fire);
	}
}

rule("challenge 4 end")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.challenge == 4;
		Global.nbPlayersKilled == 1;
	}

	actions
	{
		Declare Team Victory(Team 2);
	}
}

rule("lost")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.timer == 0;
	}

	actions
	{
		Declare Team Victory(Team 1);
	}
}
`