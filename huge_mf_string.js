hugeMfString = `
rule("start all humans with money")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	actions
	{
		Set Player Variable(Event Player, B, 151);
	}
}

rule("declare human defeat")
{
	event
	{
		Player Died;
		Team 1;
		All;
	}

	conditions
	{
		All Dead Players(Team 1) == All Players(Team 1);
		Is Assembling Heroes == False;
		Is Game In Progress == True;
		Global Variable(R) <= 0;
	}

	actions
	{
		Declare Team Victory(Team 2);
	}
}

rule("Display human Menu")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	actions
	{
		Create HUD Text(Event Player, String("{0}: {1}", String("Status", Null, Null, Null), String("{0} {1}", Player Variable(
			Event Player, A), String("({0})", Player Variable(Event Player, Z), Null, Null), Null), Null), Null, Null, Right, 0, White,
			White, White, Visible To and String);
		Create HUD Text(Event Player, Null, String("Upgrades", Null, Null, Null), String("{0} - {1}", 1, String("{0} {1}", String(
			"Upgrade", Null, Null, Null), String("{0} {1}", String("Attack", Null, Null, Null), String("({0})", 25, Null, Null), Null),
			Null), Null), Right, 1, White, Green, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0} - {1}", 2, String("{0} {1}", String("Upgrade", Null, Null, Null), String(
			"{0} {1}", String("Survive", Null, Null, Null), String("({0})", 25, Null, Null), Null), Null), Null), Right, 2, White, White,
			White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0} - {1}", 3, String("{0} {1}", String("Upgrade", Null, Null, Null), String(
			"{0} {1}", String("Rescuing", Null, Null, Null), String("({0})", 25, Null, Null), Null), Null), Null), Right, 3, White, White,
			White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0} - {1}", 4, String("{0} {1}", String("Upgrade", Null, Null, Null), String(
			"{0} {1}", String("Faster", Null, Null, Null), String("({0})", 45, Null, Null), Null), Null), Null), Right, 4, White, White,
			White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0} - {1}", 5, String("{0} {1}", String("Upgrade", Null, Null, Null), String(
			"{0} {1}", String("{0} {1}", String("Burning", Null, Null, Null), String("Attack", Null, Null, Null), Null), String("({0})",
			75, Null, Null), Null), Null), Null), Right, 5, White, White, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0} - {1}", 6, String("{0} {1}", String("Upgrade", Null, Null, Null), String(
			"{0} {1}", String("{0} {1}", String("Freezing", Null, Null, Null), String("Attack", Null, Null, Null), Null), String("({0})",
			150, Null, Null), Null), Null), Null), Right, 6, White, White, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0} - {1}", 7, String("{0} {1}", String("Buy", Null, Null, Null), String(
			"{0} {1}", String("Resurrect", Null, Null, Null), String("({0})", Add(100, Multiply(2, Global Variable(Z))), Null, Null),
			Null), Null), Null), Right, 7, White, White, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0} - {1}", 8, String("{0} {1}", String("Upgrade", Null, Null, Null), String(
			"{0} {1}", String("{0} {1}", String("Attack", Null, Null, Null), String("Distance", Null, Null, Null), Null), String("({0})",
			20, Null, Null), Null), Null), Null), Right, 8, White, White, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0} - {1}", 9, String("{0} {1}", String("Upgrade", Null, Null, Null), String(
			"{0} {1}", String("{0} {1}", String("Dome", Null, Null, Null), String("Attack", Null, Null, Null), Null), String("({0})", 100,
			Null, Null), Null), Null), Null), Right, 9, White, White, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0} - {1}", 10, String("{0} {1}", String("Upgrade", Null, Null, Null), String(
			"{0} {1}", String("{0} {1}", String("Time", Null, Null, Null), String("Rescuing", Null, Null, Null), Null), String("({0})", 75,
			Null, Null), Null), Null), Null), Right, 10, White, White, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0} - {1}", 11, String("{0} {1}", String("Buy", Null, Null, Null), String(
			"{0} {1}", String("{0} {1}", String("Teammate", Null, Null, Null), String("Resurrect", Null, Null, Null), Null), String("({0})
			", Add(275, Multiply(3, Global Variable(Z))), Null, Null), Null), Null), Null), Right, 11, White, White, White,
			Visible To and String);
	}
}

rule("display human upgrades")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	actions
	{
		Create HUD Text(Event Player, Null, String("Levels", Null, Null, Null), String("{0}: {1}", String("Attack", Null, Null, Null),
			Player Variable(Event Player, E), Null), Left, 1, White, Yellow, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0}: {1}", String("Survive", Null, Null, Null), Player Variable(Event Player, F),
			Null), Left, 2, White, White, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0}: {1}", String("Rescuing", Null, Null, Null), Player Variable(Event Player,
			G), Null), Left, 3, White, White, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0}: {1}", String("Faster", Null, Null, Null), Player Variable(Event Player, H),
			Null), Left, 4, White, White, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0}: {1}", String("{0} {1}", String("Burning", Null, Null, Null), String(
			"Attack", Null, Null, Null), Null), Player Variable(Event Player, I), Null), Left, 5, White, White, White,
			Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0}: {1}", String("{0} {1}", String("Freezing", Null, Null, Null), String(
			"Attack", Null, Null, Null), Null), Player Variable(Event Player, J), Null), Left, 6, White, White, White,
			Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0}: {1}", String("Resurrect", Null, Null, Null), Player Variable(Event Player,
			K), Null), Left, 7, White, White, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0}: {1}", String("{0} {1}", String("Attack", Null, Null, Null), String(
			"Distance", Null, Null, Null), Null), Player Variable(Event Player, L), Null), Left, 8, White, White, White,
			Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0}: {1}", String("{0} {1}", String("Dome", Null, Null, Null), String("Attack",
			Null, Null, Null), Null), Player Variable(Event Player, M), Null), Left, 9, White, White, White, Visible To and String);
		Create HUD Text(Event Player, Null, Null, String("{0}: {1}", String("{0} {1}", String("Time", Null, Null, Null), String("Rescuing",
			Null, Null, Null), Null), Player Variable(Event Player, N), Null), Left, 10, White, White, White, Visible To and String);
	}
}

rule("display human money")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	actions
	{
		Create HUD Text(Event Player, String("{0}: {1}", String("Money", Null, Null, Null), Player Variable(Event Player, B), Null), Null,
			Null, Left, 0, Yellow, White, White, Visible To and String);
	}
}

rule("open human menu")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == False;
		Is Button Held(Event Player, Interact) == True;
	}

	actions
	{
		Wait(0.250, Ignore Condition);
		Set Player Variable(Event Player, A, True);
		Disallow Button(Event Player, Primary Fire);
		Disallow Button(Event Player, Secondary Fire);
		Disallow Button(Event Player, Jump);
	}
}

rule("close human menu")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Is Button Held(Event Player, Interact) == True;
	}

	actions
	{
		Wait(0.250, Ignore Condition);
		Set Player Variable(Event Player, A, False);
		Allow Button(Event Player, Primary Fire);
		Allow Button(Event Player, Secondary Fire);
		Allow Button(Event Player, Jump);
		Set Player Variable(Event Player, Z, 0);
	}
}

rule("Scroll Left Human Menu")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Is Button Held(Event Player, Primary Fire) == True;
		Player Variable(Event Player, Z) > 0;
	}

	actions
	{
		Modify Player Variable(Event Player, Z, Subtract, 1);
	}
}

rule("Scroll Right Human Menu")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Is Button Held(Event Player, Secondary Fire) == True;
		Player Variable(Event Player, Z) < 20;
	}

	actions
	{
		Modify Player Variable(Event Player, Z, Add, 1);
	}
}

rule("upgrade attack")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Player Variable(Event Player, Z) == 1;
		Player Variable(Event Player, B) > 25;
		Is Button Held(Event Player, Jump) == True;
	}

	actions
	{
		Modify Player Variable(Event Player, E, Add, 1);
		Modify Player Variable(Event Player, B, Subtract, 25);
		Set Damage Dealt(Event Player, Add(100, Multiply(8.750, Player Variable(Event Player, E))));
		Wait(0.100, Abort When False);
		Loop If Condition Is True;
	}
}

rule("upgrade Survive")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Player Variable(Event Player, Z) == 2;
		Player Variable(Event Player, B) > 25;
		Is Button Held(Event Player, Jump) == True;
	}

	actions
	{
		Modify Player Variable(Event Player, F, Add, 1);
		Modify Player Variable(Event Player, B, Subtract, 25);
		Set Max Health(Event Player, Add(100, Multiply(10, Player Variable(Event Player, F))));
		Wait(0.100, Ignore Condition);
		Heal(Event Player, Null, Max Health(Event Player));
		Wait(0.100, Abort When False);
		Loop If Condition Is True;
	}
}

rule("upgrade Rescuing")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Player Variable(Event Player, Z) == 3;
		Player Variable(Event Player, B) > 25;
		Is Button Held(Event Player, Jump) == True;
	}

	actions
	{
		Modify Player Variable(Event Player, G, Add, 1);
		Modify Player Variable(Event Player, B, Subtract, 25);
		Set Healing Dealt(Event Player, Add(100, Multiply(5, Player Variable(Event Player, G))));
		Wait(0.100, Abort When False);
		Loop If Condition Is True;
	}
}

rule("upgrade Faster")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Player Variable(Event Player, Z) == 4;
		Player Variable(Event Player, B) > 45;
		Is Button Held(Event Player, Jump) == True;
	}

	actions
	{
		Modify Player Variable(Event Player, H, Add, 1);
		Modify Player Variable(Event Player, B, Subtract, 45);
		Set Move Speed(Event Player, Add(100, Multiply(10, Player Variable(Event Player, H))));
		Wait(0.100, Abort When False);
		Loop If Condition Is True;
	}
}

rule("upgrade burning Attack")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Player Variable(Event Player, Z) == 5;
		Player Variable(Event Player, B) > 75;
		Is Button Held(Event Player, Jump) == True;
	}

	actions
	{
		Modify Player Variable(Event Player, I, Add, 1);
		Modify Player Variable(Event Player, B, Subtract, 75);
		Wait(0.100, Abort When False);
		Loop If Condition Is True;
	}
}

rule("upgrade freezing attack")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Player Variable(Event Player, Z) == 6;
		Player Variable(Event Player, B) > 150;
		Is Button Held(Event Player, Jump) == True;
	}

	actions
	{
		Modify Player Variable(Event Player, J, Add, 1);
		Modify Player Variable(Event Player, B, Subtract, 150);
		Wait(0.100, Abort When False);
		Loop If Condition Is True;
	}
}

rule("buy resurrect")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Player Variable(Event Player, Z) == 7;
		Player Variable(Event Player, B) > Add(100, Multiply(2, Global Variable(Z)));
		Is Button Held(Event Player, Jump) == True;
	}

	actions
	{
		Modify Player Variable(Event Player, K, Add, 1);
		Modify Player Variable(Event Player, B, Subtract, Add(100, Multiply(2, Global Variable(Z))));
		Modify Global Variable(R, Add, 1);
		Wait(0.100, Abort When False);
		Loop If Condition Is True;
	}
}

rule("upgrade attack distance")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Player Variable(Event Player, Z) == 8;
		Player Variable(Event Player, B) > 20;
		Is Button Held(Event Player, Jump) == True;
	}

	actions
	{
		Modify Player Variable(Event Player, L, Add, 1);
		Modify Player Variable(Event Player, B, Subtract, 20);
		Set Projectile Speed(Event Player, Add(100, Multiply(10, Player Variable(Event Player, L))));
		Wait(0.100, Abort When False);
		Loop If Condition Is True;
	}
}

rule("upgrade dome attack")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Player Variable(Event Player, Z) == 9;
		Player Variable(Event Player, B) > 100;
		Is Button Held(Event Player, Jump) == True;
	}

	actions
	{
		Modify Player Variable(Event Player, M, Add, 1);
		Modify Player Variable(Event Player, B, Subtract, 100);
		Wait(0.100, Abort When False);
		Loop If Condition Is True;
	}
}

rule("upgrade time rescuing")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Player Variable(Event Player, Z) == 10;
		Player Variable(Event Player, B) > 75;
		Is Button Held(Event Player, Jump) == True;
	}

	actions
	{
		Modify Player Variable(Event Player, N, Add, 1);
		Modify Player Variable(Event Player, B, Subtract, 75);
		Wait(0.100, Abort When False);
		Loop If Condition Is True;
	}
}

rule("buy Team resurrect")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, A) == True;
		Player Variable(Event Player, Z) == 11;
		Player Variable(Event Player, B) > Add(275, Multiply(3, Global Variable(Z)));
		Is Button Held(Event Player, Jump) == True;
		Number of Dead Players(Team 1) > 0;
	}

	actions
	{
		Modify Global Variable(S, Add, 1);
		Modify Player Variable(Event Player, B, Subtract, Add(275, Multiply(3, Global Variable(Z))));
		Big Message(All Players(All Teams), String("{0} {1}", Event Player, String("{0} {1}", String("Bought", Null, Null, Null), String(
			"{0} {1}", String("Teammate", Null, Null, Null), String("Resurrect", Null, Null, Null), Null), Null), Null));
	}
}

rule("process burning attack")
{
	event
	{
		Player dealt damage;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, I) > 0;
	}

	actions
	{
		Start Damage Over Time(Victim, Null, Multiply(1, Player Variable(Event Player, I)), Multiply(18, Player Variable(Event Player,
			I)));
		Set Status(Victim, Null, Burning, Multiply(1, Player Variable(Event Player, I)));
		Wait(0.100, Ignore Condition);
		Set Player Variable(Event Player, D, Last Damage Over Time ID);
		Wait(0.399, Ignore Condition);
	}
}

rule("process freezing attack")
{
	event
	{
		Player dealt damage;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, J) > 0;
	}

	actions
	{
		Set Status(Victim, Null, Frozen, Multiply(0.170, Player Variable(Event Player, J)));
		Wait(0.100, Ignore Condition);
	}
}

rule("process resurrect")
{
	event
	{
		Player Died;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, K) > 0;
	}

	actions
	{
		Enable Built-In Game Mode Respawning(Event Player);
		Wait(0.500, Ignore Condition);
		Respawn(Event Player);
		Modify Player Variable(Event Player, K, Subtract, 1);
		Wait(0.500, Ignore Condition);
		Modify Global Variable(R, Subtract, 1);
		Disable Built-In Game Mode Respawning(Event Player);
	}
}

rule("Process dome attack effects")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, M) > 0;
	}

	actions
	{
		Create Effect(All Players(All Teams), Sphere, Team 1, Event Player, Add(4, Divide(Player Variable(Event Player, M), 3)),
			Visible To Position and Radius);
	}
}

rule("Process dome attack damage")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, M) > 0;
	}

	actions
	{
		Damage(Players Within Radius(Event Player, Add(3, Divide(Player Variable(Event Player, M), 4)), Opposite Team Of(Team Of(
			Event Player)), Surfaces), Event Player, Multiply(6, Player Variable(Event Player, M)));
		Wait(0.500, Abort When False);
		Loop If Condition Is True;
	}
}

rule("process time rescue")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, N) > 0;
	}

	actions
	{
		Heal(Event Player, Event Player, Multiply(7.500, Player Variable(Event Player, N)));
		Wait(0.500, Abort When False);
		Loop If Condition Is True;
	}
}

rule("process team resurrect")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global Variable(S) > 0;
	}

	actions
	{
		Enable Built-In Game Mode Respawning(All Players(Team 1));
		Wait(0.100, Ignore Condition);
		Respawn(All Dead Players(Team 1));
		Wait(0.100, Ignore Condition);
		Modify Global Variable(S, Subtract, 1);
		Disable Built-In Game Mode Respawning(All Players(Team 1));
	}
}

rule("Display Omnic Level To HUmans")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	actions
	{
		Create HUD Text(Event Player, Null, Null, String("{0} {1}", String("Current Enemy", Null, Null, Null), String("{0}: {1}", String(
			"Level", Null, Null, Null), Divide(Global Variable(Y), Number of Players(Team 2)), Null), Null), Top, 0, White, White, White,
			Visible To and String);
	}
}

rule("upgrade omnics")
{
	event
	{
		Player Died;
		Team 2;
		All;
	}

	actions
	{
		Modify Global Variable(Z, Add, 1);
		Modify Player Variable(Event Player, Z, Add, 1);
		Set Max Health(Event Player, Add(100, Multiply(Player Variable(Event Player, M), Player Variable(Event Player, Z))));
		Set Damage Dealt(Event Player, Add(100, Multiply(Player Variable(Event Player, N), Player Variable(Event Player, Z))));
		Set Move Speed(Event Player, Add(100, Multiply(2.500, Player Variable(Event Player, Z))));
		Respawn(Event Player);
		Clear Status(Event Player, Burning);
		Clear Status(Event Player, Frozen);
		Stop All Damage Over Time(Event Player);
	}
}

rule("Set omnic stage 0")
{
	event
	{
		Ongoing - Each Player;
		Team 2;
		All;
	}

	conditions
	{
		Player Variable(Event Player, Z) < 5;
	}

	actions
	{
		Disallow Button(Event Player, Primary Fire);
		Disallow Button(Event Player, Secondary Fire);
		Disallow Button(Event Player, Ability 1);
		Disallow Button(Event Player, Ability 2);
		Disallow Button(Event Player, Ultimate);
		Set Player Variable(Event Player, M, 15);
		Set Player Variable(Event Player, N, 1.500);
		Modify Global Variable(Y, Add, 1);
	}
}

rule("Set omnic stage 1")
{
	event
	{
		Ongoing - Each Player;
		Team 2;
		All;
	}

	conditions
	{
		Player Variable(Event Player, Z) >= 5;
	}

	actions
	{
		Allow Button(Event Player, Primary Fire);
		Big Message(Event Player, String("{0}: {1}", String("Current Upgrade", Null, Null, Null), String("Attack", Null, Null, Null),
			Null));
		Big Message(All Players(Opposite Team Of(Team Of(Event Player))), String("{0} {1}", String("Enemy", Null, Null, Null), String(
			"Upgrade", Null, Null, Null), Null));
		Set Player Variable(Event Player, M, 20);
		Set Player Variable(Event Player, N, 4.500);
		Modify Global Variable(Y, Add, 1);
	}
}

rule("Set omnic stage 2")
{
	event
	{
		Ongoing - Each Player;
		Team 2;
		All;
	}

	conditions
	{
		Player Variable(Event Player, Z) >= 15;
	}

	actions
	{
		Start Forcing Player To Be Hero(Event Player, Hero(Bastion));
		Allow Button(Event Player, Secondary Fire);
		Big Message(Event Player, String("{0}: {1}", String("Current Upgrade", Null, Null, Null), Hero(Bastion), Null));
		Big Message(All Players(Opposite Team Of(Team Of(Event Player))), String("{0} {1}", String("Enemy", Null, Null, Null), String(
			"Upgrade", Null, Null, Null), Null));
		Set Player Variable(Event Player, M, 30);
		Set Player Variable(Event Player, N, 8);
		Modify Global Variable(Y, Add, 1);
	}
}

rule("Set omnic stage 3")
{
	event
	{
		Ongoing - Each Player;
		Team 2;
		All;
	}

	conditions
	{
		Player Variable(Event Player, Z) >= 25;
	}

	actions
	{
		Start Forcing Player To Be Hero(Event Player, Hero(Orisa));
		Allow Button(Event Player, Ability 1);
		Big Message(Event Player, String("{0}: {1}", String("Current Upgrade", Null, Null, Null), Hero(Orisa), Null));
		Big Message(All Players(Opposite Team Of(Team Of(Event Player))), String("{0} {1}", String("Enemy", Null, Null, Null), String(
			"Upgrade", Null, Null, Null), Null));
		Set Player Variable(Event Player, M, 40);
		Set Player Variable(Event Player, N, 12);
		Modify Global Variable(Y, Add, 1);
	}
}

rule("Add Human Money on Elim")
{
	event
	{
		Player earned elimination;
		Team 1;
		All;
	}

	actions
	{
		Modify Player Variable(Event Player, B, Add, Add(5, Divide(Global Variable(Z), 10)));
	}
}

rule("Add HUman Money on damage")
{
	event
	{
		Player dealt damage;
		Team 1;
		All;
	}

	actions
	{
		Modify Player Variable(Event Player, B, Add, Max(Divide(Player Variable(Event Player, E), 15), 1));
		Wait(0.100, Ignore Condition);
	}
}

rule("Psuedo Money On Healing (brig)")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Hero Of(Event Player) == Hero(Brigitte);
		Is Using Ability 2(Event Player) == True;
		Is Game In Progress == True;
	}

	actions
	{
		Modify Player Variable(Event Player, B, Add, Max(10, Divide(Player Variable(Event Player, G), 3.750)));
	}
}

rule("Psuedo Money On Healing (baptiste)")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Hero Of(Event Player) == Hero(Baptiste);
		Is Firing Secondary(Event Player) == True;
		Is Game In Progress == True;
	}

	actions
	{
		Modify Player Variable(Event Player, B, Add, Max(2, Divide(Player Variable(Event Player, G), 4)));
		Wait(1, Ignore Condition);
		Loop If Condition Is True;
	}
}

rule("Psuedo Money On Healing (zen)")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Hero Of(Event Player) == Hero(Zenyatta);
		Is Using Ability 1(Event Player) == True;
		Is Game In Progress == True;
	}

	actions
	{
		Modify Player Variable(Event Player, B, Add, Max(0.500, Divide(Player Variable(Event Player, G), 5)));
		Wait(1, Ignore Condition);
		Loop If Condition Is True;
	}
}

rule("Psuedo Money On Healing (mercy)")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Hero Of(Event Player) == Hero(Mercy);
		Or(Is Firing Primary(Event Player), Is Firing Secondary(Event Player)) == True;
		Is Game In Progress == True;
	}

	actions
	{
		Modify Player Variable(Event Player, B, Add, Max(1.750, Divide(Player Variable(Event Player, G), 8.500)));
		Wait(1, Ignore Condition);
		Loop If Condition Is True;
	}
}

rule("psuedo money on healing (moira)")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Hero Of(Event Player) == Hero(Moira);
		Is Firing Primary(Event Player) == True;
		Is Game In Progress == True;
	}

	actions
	{
		Modify Player Variable(Event Player, B, Add, Max(1, Divide(Player Variable(Event Player, G), 4)));
		Wait(0.500, Ignore Condition);
		Loop If Condition Is True;
	}
}

rule("Psuedo Money On Healing (ana)")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Hero Of(Event Player) == Hero(Ana);
		Is Firing Primary(Event Player) == True;
		Is Game In Progress == True;
	}

	actions
	{
		Modify Player Variable(Event Player, B, Add, Max(1, Divide(Player Variable(Event Player, G), 4)));
		Wait(1, Ignore Condition);
		Loop If Condition Is True;
	}
}

rule("Psuedo Money On Healing (lucio)")
{
	event
	{
		Ongoing - Each Player;
		Team 1;
		All;
	}

	conditions
	{
		Hero Of(Event Player) == Hero(Lúcio);
		Is Using Ability 2(Event Player) == True;
		Is Game In Progress == True;
	}

	actions
	{
		Modify Player Variable(Event Player, B, Add, Max(3, Divide(Player Variable(Event Player, G), 4.500)));
		Wait(0.500, Ignore Condition);
		Loop If Condition Is True;
	}
}

rule("process human death")
{
	event
	{
		Player Died;
		Team 1;
		All;
	}

	conditions
	{
		Player Variable(Event Player, K) <= 0;
		Is Game In Progress == True;
	}

	actions
	{
		Disable Built-In Game Mode Respawning(Event Player);
	}
}
`