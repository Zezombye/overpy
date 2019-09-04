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

var emptyStrKw = [
    {
        "opy": "",
        "en": ""
    }
];

var normalStrKw = [
    {
        "opy": "Zones",
        "en": "Zones"
    },
    {
        "opy": "Zone",
        "en": "Zone"
    },
    {
        "opy": "You Win",
        "en": "You Win"
    },
    {
        "opy": "You Lose",
        "en": "You Lose"
    },
    {
        "opy": "You",
        "en": "You"
    },
    {
        "opy": "Yes",
        "en": "Yes"
    },
    {
        "opy": "Yellow",
        "en": "Yellow"
    },
    {
        "opy": "Wow",
        "en": "Wow"
    },
    {
        "opy": "Worst",
        "en": "Worst"
    },
    {
        "opy": "Worse",
        "en": "Worse"
    },
    {
        "opy": "Wisdom",
        "en": "Wisdom"
    },
    {
        "opy": "Wins",
        "en": "Wins"
    },
    {
        "opy": "Winners",
        "en": "Winners"
    },
    {
        "opy": "Winner",
        "en": "Winner"
    },
    {
        "opy": "Win",
        "en": "Win"
    },
    {
        "opy": "Wild",
        "en": "Wild"
    },
    {
        "opy": "White",
        "en": "White"
    },
    {
        "opy": "West",
        "en": "West"
    },
    {
        "opy": "Well Played",
        "en": "Well Played"
    },
    {
        "opy": "Welcome",
        "en": "Welcome"
    },
    {
        "opy": "Warning",
        "en": "Warning"
    },
    {
        "opy": "Walls",
        "en": "Walls"
    },
    {
        "opy": "Wall",
        "en": "Wall"
    },
    {
        "opy": "Waiting",
        "en": "Waiting"
    },
    {
        "opy": "Wait",
        "en": "Wait"
    },
    {
        "opy": "Vortices",
        "en": "Vortices"
    },
    {
        "opy": "Vortex",
        "en": "Vortex"
    },
    {
        "opy": "Visible",
        "en": "Visible"
    },
    {
        "opy": "Victory",
        "en": "Victory"
    },
    {
        "opy": "Use Ultimate Ability",
        "en": "Use Ultimate Ability"
    },
    {
        "opy": "Use Ability 2",
        "en": "Use Ability 2"
    },
    {
        "opy": "Use Ability 1",
        "en": "Use Ability 1"
    },
    {
        "opy": "Uploading",
        "en": "Uploading"
    },
    {
        "opy": "Uploaded",
        "en": "Uploaded"
    },
    {
        "opy": "Upload",
        "en": "Upload"
    },
    {
        "opy": "Upgrades",
        "en": "Upgrades"
    },
    {
        "opy": "Upgrade",
        "en": "Upgrade"
    },
    {
        "opy": "Up",
        "en": "Up"
    },
    {
        "opy": "Unstable",
        "en": "Unstable"
    },
    {
        "opy": "Unsafe",
        "en": "Unsafe"
    },
    {
        "opy": "Unlocking",
        "en": "Unlocking"
    },
    {
        "opy": "Unlocked",
        "en": "Unlocked"
    },
    {
        "opy": "Unlock",
        "en": "Unlock"
    },
    {
        "opy": "Unlimited",
        "en": "Unlimited"
    },
    {
        "opy": "Unknown",
        "en": "Unknown"
    },
    {
        "opy": "Under",
        "en": "Under"
    },
    {
        "opy": "Ultimate Ability",
        "en": "Ultimate Ability"
    },
    {
        "opy": "Ugh",
        "en": "Ugh"
    },
    {
        "opy": "Turrets",
        "en": "Turrets"
    },
    {
        "opy": "Turret",
        "en": "Turret"
    },
    {
        "opy": "Try Again",
        "en": "Try Again"
    },
    {
        "opy": "Transferring",
        "en": "Transferring"
    },
    {
        "opy": "Transferred",
        "en": "Transferred"
    },
    {
        "opy": "Transfer",
        "en": "Transfer"
    },
    {
        "opy": "Traitors",
        "en": "Traitors"
    },
    {
        "opy": "Traitor",
        "en": "Traitor"
    },
    {
        "opy": "Trading",
        "en": "Trading"
    },
    {
        "opy": "Traded",
        "en": "Traded"
    },
    {
        "opy": "Trade",
        "en": "Trade"
    },
    {
        "opy": "Total",
        "en": "Total"
    },
    {
        "opy": "Times",
        "en": "Times"
    },
    {
        "opy": "Time",
        "en": "Time"
    },
    {
        "opy": "Tiebreaker",
        "en": "Tiebreaker"
    },
    {
        "opy": "Threats",
        "en": "Threats"
    },
    {
        "opy": "Threat Levels",
        "en": "Threat Levels"
    },
    {
        "opy": "Threat Level",
        "en": "Threat Level"
    },
    {
        "opy": "Threat",
        "en": "Threat"
    },
    {
        "opy": "That Was Awesome",
        "en": "That Was Awesome"
    },
    {
        "opy": "Thanks",
        "en": "Thanks"
    },
    {
        "opy": "Thank You",
        "en": "Thank You"
    },
    {
        "opy": "Terrible",
        "en": "Terrible"
    },
    {
        "opy": "Teams",
        "en": "Teams"
    },
    {
        "opy": "Teammates",
        "en": "Teammates"
    },
    {
        "opy": "Teammate",
        "en": "Teammate"
    },
    {
        "opy": "Team",
        "en": "Team"
    },
    {
        "opy": "Targets",
        "en": "Targets"
    },
    {
        "opy": "Target",
        "en": "Target"
    },
    {
        "opy": "Surviving",
        "en": "Surviving"
    },
    {
        "opy": "Survived",
        "en": "Survived"
    },
    {
        "opy": "Survive",
        "en": "Survive"
    },
    {
        "opy": "Superb",
        "en": "Superb"
    },
    {
        "opy": "Sunk",
        "en": "Sunk"
    },
    {
        "opy": "Sudden Death",
        "en": "Sudden Death"
    },
    {
        "opy": "Success",
        "en": "Success"
    },
    {
        "opy": "Suboptimal",
        "en": "Suboptimal"
    },
    {
        "opy": "Stunning",
        "en": "Stunning"
    },
    {
        "opy": "Stunned",
        "en": "Stunned"
    },
    {
        "opy": "Stun",
        "en": "Stun"
    },
    {
        "opy": "Strength",
        "en": "Strength"
    },
    {
        "opy": "Stopping",
        "en": "Stopping"
    },
    {
        "opy": "Stopped",
        "en": "Stopped"
    },
    {
        "opy": "Stop",
        "en": "Stop"
    },
    {
        "opy": "Staying",
        "en": "Staying"
    },
    {
        "opy": "Stayed",
        "en": "Stayed"
    },
    {
        "opy": "Stay Away",
        "en": "Stay Away"
    },
    {
        "opy": "Stay",
        "en": "Stay"
    },
    {
        "opy": "Status",
        "en": "Status"
    },
    {
        "opy": "Starting",
        "en": "Starting"
    },
    {
        "opy": "Started",
        "en": "Started"
    },
    {
        "opy": "Start",
        "en": "Start"
    },
    {
        "opy": "Stars",
        "en": "Stars"
    },
    {
        "opy": "Star",
        "en": "Star"
    },
    {
        "opy": "Stable",
        "en": "Stable"
    },
    {
        "opy": "Stabilizing",
        "en": "Stabilizing"
    },
    {
        "opy": "Stabilized",
        "en": "Stabilized"
    },
    {
        "opy": "Stabilize",
        "en": "Stabilize"
    },
    {
        "opy": "Spheres",
        "en": "Spheres"
    },
    {
        "opy": "Sphere",
        "en": "Sphere"
    },
    {
        "opy": "Speeds",
        "en": "Speeds"
    },
    {
        "opy": "Speed",
        "en": "Speed"
    },
    {
        "opy": "Spawning",
        "en": "Spawning"
    },
    {
        "opy": "Spawned",
        "en": "Spawned"
    },
    {
        "opy": "Spawn",
        "en": "Spawn"
    },
    {
        "opy": "Sparkles",
        "en": "Sparkles"
    },
    {
        "opy": "Spades",
        "en": "Spades"
    },
    {
        "opy": "Spade",
        "en": "Spade"
    },
    {
        "opy": "Southwest",
        "en": "Southwest"
    },
    {
        "opy": "Southeast",
        "en": "Southeast"
    },
    {
        "opy": "South",
        "en": "South"
    },
    {
        "opy": "Sorry",
        "en": "Sorry"
    },
    {
        "opy": "Sold",
        "en": "Sold"
    },
    {
        "opy": "Slowest",
        "en": "Slowest"
    },
    {
        "opy": "Slower",
        "en": "Slower"
    },
    {
        "opy": "Slow",
        "en": "Slow"
    },
    {
        "opy": "Slept",
        "en": "Slept"
    },
    {
        "opy": "Sleeping",
        "en": "Sleeping"
    },
    {
        "opy": "Sleep",
        "en": "Sleep"
    },
    {
        "opy": "Skipping",
        "en": "Skipping"
    },
    {
        "opy": "Skipped",
        "en": "Skipped"
    },
    {
        "opy": "Skip",
        "en": "Skip"
    },
    {
        "opy": "Sinking",
        "en": "Sinking"
    },
    {
        "opy": "Sink",
        "en": "Sink"
    },
    {
        "opy": "Shuffled",
        "en": "Shuffled"
    },
    {
        "opy": "Shuffle",
        "en": "Shuffle"
    },
    {
        "opy": "Shops",
        "en": "Shops"
    },
    {
        "opy": "Shop",
        "en": "Shop"
    },
    {
        "opy": "Severing",
        "en": "Severing"
    },
    {
        "opy": "Severed",
        "en": "Severed"
    },
    {
        "opy": "Severe",
        "en": "Severe"
    },
    {
        "opy": "Sever",
        "en": "Sever"
    },
    {
        "opy": "Server Load Peak",
        "en": "Server Load Peak"
    },
    {
        "opy": "Server Load Average",
        "en": "Server Load Average"
    },
    {
        "opy": "Server Load",
        "en": "Server Load"
    },
    {
        "opy": "Selling",
        "en": "Selling"
    },
    {
        "opy": "Sell",
        "en": "Sell"
    },
    {
        "opy": "Selecting",
        "en": "Selecting"
    },
    {
        "opy": "Selected",
        "en": "Selected"
    },
    {
        "opy": "Select",
        "en": "Select"
    },
    {
        "opy": "Securing",
        "en": "Securing"
    },
    {
        "opy": "Secured",
        "en": "Secured"
    },
    {
        "opy": "Secure",
        "en": "Secure"
    },
    {
        "opy": "Secondary Fire",
        "en": "Secondary Fire"
    },
    {
        "opy": "Scores",
        "en": "Scores"
    },
    {
        "opy": "Score",
        "en": "Score"
    },
    {
        "opy": "Saving",
        "en": "Saving"
    },
    {
        "opy": "Saved",
        "en": "Saved"
    },
    {
        "opy": "Save",
        "en": "Save"
    },
    {
        "opy": "Safe",
        "en": "Safe"
    },
    {
        "opy": "Running",
        "en": "Running"
    },
    {
        "opy": "Run",
        "en": "Run"
    },
    {
        "opy": "Rounds Won",
        "en": "Rounds Won"
    },
    {
        "opy": "Rounds Lost",
        "en": "Rounds Lost"
    },
    {
        "opy": "Rounds",
        "en": "Rounds"
    },
    {
        "opy": "Round",
        "en": "Round"
    },
    {
        "opy": "Right",
        "en": "Right"
    },
    {
        "opy": "Revealing",
        "en": "Revealing"
    },
    {
        "opy": "Revealed",
        "en": "Revealed"
    },
    {
        "opy": "Reveal",
        "en": "Reveal"
    },
    {
        "opy": "Resurrecting",
        "en": "Resurrecting"
    },
    {
        "opy": "Resurrected",
        "en": "Resurrected"
    },
    {
        "opy": "Resurrect",
        "en": "Resurrect"
    },
    {
        "opy": "Resources",
        "en": "Resources"
    },
    {
        "opy": "Resource",
        "en": "Resource"
    },
    {
        "opy": "Rescuing",
        "en": "Rescuing"
    },
    {
        "opy": "Rescued",
        "en": "Rescued"
    },
    {
        "opy": "Rescue",
        "en": "Rescue"
    },
    {
        "opy": "Remaining",
        "en": "Remaining"
    },
    {
        "opy": "Remain",
        "en": "Remain"
    },
    {
        "opy": "Red",
        "en": "Red"
    },
    {
        "opy": "Recovering",
        "en": "Recovering"
    },
    {
        "opy": "Recovered",
        "en": "Recovered"
    },
    {
        "opy": "Recover",
        "en": "Recover"
    },
    {
        "opy": "Records",
        "en": "Records"
    },
    {
        "opy": "Record",
        "en": "Record"
    },
    {
        "opy": "Ready",
        "en": "Ready"
    },
    {
        "opy": "Reaching",
        "en": "Reaching"
    },
    {
        "opy": "Reached",
        "en": "Reached"
    },
    {
        "opy": "Reach",
        "en": "Reach"
    },
    {
        "opy": "Rank S",
        "en": "Rank S"
    },
    {
        "opy": "Rank F",
        "en": "Rank F"
    },
    {
        "opy": "Rank E",
        "en": "Rank E"
    },
    {
        "opy": "Rank D",
        "en": "Rank D"
    },
    {
        "opy": "Rank C",
        "en": "Rank C"
    },
    {
        "opy": "Rank B",
        "en": "Rank B"
    },
    {
        "opy": "Rank A",
        "en": "Rank A"
    },
    {
        "opy": "Rank",
        "en": "Rank"
    },
    {
        "opy": "Raising",
        "en": "Raising"
    },
    {
        "opy": "Raised",
        "en": "Raised"
    },
    {
        "opy": "Raise",
        "en": "Raise"
    },
    {
        "opy": "Purple",
        "en": "Purple"
    },
    {
        "opy": "Purifying",
        "en": "Purifying"
    },
    {
        "opy": "Purify",
        "en": "Purify"
    },
    {
        "opy": "Purified",
        "en": "Purified"
    },
    {
        "opy": "Protecting",
        "en": "Protecting"
    },
    {
        "opy": "Protected",
        "en": "Protected"
    },
    {
        "opy": "Protect",
        "en": "Protect"
    },
    {
        "opy": "Projectiles",
        "en": "Projectiles"
    },
    {
        "opy": "Projectile",
        "en": "Projectile"
    },
    {
        "opy": "Primary Fire",
        "en": "Primary Fire"
    },
    {
        "opy": "Price",
        "en": "Price"
    },
    {
        "opy": "Power-Ups",
        "en": "Power-Ups"
    },
    {
        "opy": "Power-Up",
        "en": "Power-Up"
    },
    {
        "opy": "Power",
        "en": "Power"
    },
    {
        "opy": "Position",
        "en": "Position"
    },
    {
        "opy": "Points Lost",
        "en": "Points Lost"
    },
    {
        "opy": "Points Earned",
        "en": "Points Earned"
    },
    {
        "opy": "Points",
        "en": "Points"
    },
    {
        "opy": "Point",
        "en": "Point"
    },
    {
        "opy": "Playing",
        "en": "Playing"
    },
    {
        "opy": "Players",
        "en": "Players"
    },
    {
        "opy": "Player",
        "en": "Player"
    },
    {
        "opy": "Played",
        "en": "Played"
    },
    {
        "opy": "Play",
        "en": "Play"
    },
    {
        "opy": "Piles",
        "en": "Piles"
    },
    {
        "opy": "Pile",
        "en": "Pile"
    },
    {
        "opy": "Picking",
        "en": "Picking"
    },
    {
        "opy": "Picked",
        "en": "Picked"
    },
    {
        "opy": "Pick",
        "en": "Pick"
    },
    {
        "opy": "Phases",
        "en": "Phases"
    },
    {
        "opy": "Phase",
        "en": "Phase"
    },
    {
        "opy": "Payloads",
        "en": "Payloads"
    },
    {
        "opy": "Payload",
        "en": "Payload"
    },
    {
        "opy": "Participants",
        "en": "Participants"
    },
    {
        "opy": "Participant",
        "en": "Participant"
    },
    {
        "opy": "Overtime",
        "en": "Overtime"
    },
    {
        "opy": "Over",
        "en": "Over"
    },
    {
        "opy": "Outside",
        "en": "Outside"
    },
    {
        "opy": "Outgoing",
        "en": "Outgoing"
    },
    {
        "opy": "Out Of View",
        "en": "Out Of View"
    },
    {
        "opy": "Optimizing",
        "en": "Optimizing"
    },
    {
        "opy": "Optimized",
        "en": "Optimized"
    },
    {
        "opy": "Optimize",
        "en": "Optimize"
    },
    {
        "opy": "Optimal",
        "en": "Optimal"
    },
    {
        "opy": "Oops",
        "en": "Oops"
    },
    {
        "opy": "Oof",
        "en": "Oof"
    },
    {
        "opy": "On",
        "en": "On"
    },
    {
        "opy": "Off",
        "en": "Off"
    },
    {
        "opy": "Obtaining",
        "en": "Obtaining"
    },
    {
        "opy": "Obtained",
        "en": "Obtained"
    },
    {
        "opy": "Obtain",
        "en": "Obtain"
    },
    {
        "opy": "Objects",
        "en": "Objects"
    },
    {
        "opy": "Objectives",
        "en": "Objectives"
    },
    {
        "opy": "Objective",
        "en": "Objective"
    },
    {
        "opy": "Object",
        "en": "Object"
    },
    {
        "opy": "Not Today",
        "en": "Not Today"
    },
    {
        "opy": "Northwest",
        "en": "Northwest"
    },
    {
        "opy": "Northeast",
        "en": "Northeast"
    },
    {
        "opy": "North",
        "en": "North"
    },
    {
        "opy": "Normal",
        "en": "Normal"
    },
    {
        "opy": "None",
        "en": "None"
    },
    {
        "opy": "No Thanks",
        "en": "No Thanks"
    },
    {
        "opy": "No",
        "en": "No"
    },
    {
        "opy": "Nice Try",
        "en": "Nice Try"
    },
    {
        "opy": "Next Upgrade",
        "en": "Next Upgrade"
    },
    {
        "opy": "Next Targets",
        "en": "Next Targets"
    },
    {
        "opy": "Next Target",
        "en": "Next Target"
    },
    {
        "opy": "Next Round",
        "en": "Next Round"
    },
    {
        "opy": "Next Players",
        "en": "Next Players"
    },
    {
        "opy": "Next Player",
        "en": "Next Player"
    },
    {
        "opy": "Next Phase",
        "en": "Next Phase"
    },
    {
        "opy": "Next Objects",
        "en": "Next Objects"
    },
    {
        "opy": "Next Objective",
        "en": "Next Objective"
    },
    {
        "opy": "Next Object",
        "en": "Next Object"
    },
    {
        "opy": "Next Mission",
        "en": "Next Mission"
    },
    {
        "opy": "Next Level",
        "en": "Next Level"
    },
    {
        "opy": "Next Hostages",
        "en": "Next Hostages"
    },
    {
        "opy": "Next Hostage",
        "en": "Next Hostage"
    },
    {
        "opy": "Next Heroes",
        "en": "Next Heroes"
    },
    {
        "opy": "Next Hero",
        "en": "Next Hero"
    },
    {
        "opy": "Next Game",
        "en": "Next Game"
    },
    {
        "opy": "Next Form",
        "en": "Next Form"
    },
    {
        "opy": "Next Enemy",
        "en": "Next Enemy"
    },
    {
        "opy": "Next Enemies",
        "en": "Next Enemies"
    },
    {
        "opy": "Next Checkpoint",
        "en": "Next Checkpoint"
    },
    {
        "opy": "Next Attempt",
        "en": "Next Attempt"
    },
    {
        "opy": "Next Ally",
        "en": "Next Ally"
    },
    {
        "opy": "Next Allies",
        "en": "Next Allies"
    },
    {
        "opy": "Next",
        "en": "Next"
    },
    {
        "opy": "New Record",
        "en": "New Record"
    },
    {
        "opy": "New High Score",
        "en": "New High Score"
    },
    {
        "opy": "Near",
        "en": "Near"
    },
    {
        "opy": "My Mistake",
        "en": "My Mistake"
    },
    {
        "opy": "Most",
        "en": "Most"
    },
    {
        "opy": "More",
        "en": "More"
    },
    {
        "opy": "Monsters",
        "en": "Monsters"
    },
    {
        "opy": "Monster",
        "en": "Monster"
    },
    {
        "opy": "Money",
        "en": "Money"
    },
    {
        "opy": "Moderate",
        "en": "Moderate"
    },
    {
        "opy": "Missions",
        "en": "Missions"
    },
    {
        "opy": "Mission Failed",
        "en": "Mission Failed"
    },
    {
        "opy": "Mission Accomplished",
        "en": "Mission Accomplished"
    },
    {
        "opy": "Mission Aborted",
        "en": "Mission Aborted"
    },
    {
        "opy": "Mission",
        "en": "Mission"
    },
    {
        "opy": "Min",
        "en": "Min"
    },
    {
        "opy": "Mild",
        "en": "Mild"
    },
    {
        "opy": "Max",
        "en": "Max"
    },
    {
        "opy": "Losses",
        "en": "Losses"
    },
    {
        "opy": "Loss",
        "en": "Loss"
    },
    {
        "opy": "Losers",
        "en": "Losers"
    },
    {
        "opy": "Loser",
        "en": "Loser"
    },
    {
        "opy": "Locking",
        "en": "Locking"
    },
    {
        "opy": "Locked",
        "en": "Locked"
    },
    {
        "opy": "Lock",
        "en": "Lock"
    },
    {
        "opy": "Location",
        "en": "Location"
    },
    {
        "opy": "Loading",
        "en": "Loading"
    },
    {
        "opy": "Loaded",
        "en": "Loaded"
    },
    {
        "opy": "Load",
        "en": "Load"
    },
    {
        "opy": "Lives",
        "en": "Lives"
    },
    {
        "opy": "Limited",
        "en": "Limited"
    },
    {
        "opy": "Life",
        "en": "Life"
    },
    {
        "opy": "Levels",
        "en": "Levels"
    },
    {
        "opy": "Level Up",
        "en": "Level Up"
    },
    {
        "opy": "Level Down",
        "en": "Level Down"
    },
    {
        "opy": "Level",
        "en": "Level"
    },
    {
        "opy": "Less",
        "en": "Less"
    },
    {
        "opy": "Left",
        "en": "Left"
    },
    {
        "opy": "Least",
        "en": "Least"
    },
    {
        "opy": "Leaders",
        "en": "Leaders"
    },
    {
        "opy": "Leader",
        "en": "Leader"
    },
    {
        "opy": "Killstreaks",
        "en": "Killstreaks"
    },
    {
        "opy": "Killstreak",
        "en": "Killstreak"
    },
    {
        "opy": "Killstreak",
        "en": "Killstreak"
    },
    {
        "opy": "Kills",
        "en": "Kills"
    },
    {
        "opy": "Kill",
        "en": "Kill"
    },
    {
        "opy": "Jumping",
        "en": "Jumping"
    },
    {
        "opy": "Jump",
        "en": "Jump"
    },
    {
        "opy": "Joining",
        "en": "Joining"
    },
    {
        "opy": "Joined",
        "en": "Joined"
    },
    {
        "opy": "Join",
        "en": "Join"
    },
    {
        "opy": "Items",
        "en": "Items"
    },
    {
        "opy": "Item",
        "en": "Item"
    },
    {
        "opy": "Invisible",
        "en": "Invisible"
    },
    {
        "opy": "Interact",
        "en": "Interact"
    },
    {
        "opy": "Intelligence",
        "en": "Intelligence"
    },
    {
        "opy": "Inside",
        "en": "Inside"
    },
    {
        "opy": "Innocent",
        "en": "Innocent"
    },
    {
        "opy": "Initial Upgrade",
        "en": "Initial Upgrade"
    },
    {
        "opy": "Initial Targets",
        "en": "Initial Targets"
    },
    {
        "opy": "Initial Target",
        "en": "Initial Target"
    },
    {
        "opy": "Initial Round",
        "en": "Initial Round"
    },
    {
        "opy": "Initial Players",
        "en": "Initial Players"
    },
    {
        "opy": "Initial Player",
        "en": "Initial Player"
    },
    {
        "opy": "Initial Phase",
        "en": "Initial Phase"
    },
    {
        "opy": "Initial Objects",
        "en": "Initial Objects"
    },
    {
        "opy": "Initial Objective",
        "en": "Initial Objective"
    },
    {
        "opy": "Initial Object",
        "en": "Initial Object"
    },
    {
        "opy": "Initial Mission",
        "en": "Initial Mission"
    },
    {
        "opy": "Initial Level",
        "en": "Initial Level"
    },
    {
        "opy": "Initial Hostage",
        "en": "Initial Hostage"
    },
    {
        "opy": "Initial Heroes",
        "en": "Initial Heroes"
    },
    {
        "opy": "Initial Hero",
        "en": "Initial Hero"
    },
    {
        "opy": "Initial Game",
        "en": "Initial Game"
    },
    {
        "opy": "Initial Form",
        "en": "Initial Form"
    },
    {
        "opy": "Initial Enemy",
        "en": "Initial Enemy"
    },
    {
        "opy": "Initial Enemies",
        "en": "Initial Enemies"
    },
    {
        "opy": "Initial Checkpoint",
        "en": "Initial Checkpoint"
    },
    {
        "opy": "Initial Attempt",
        "en": "Initial Attempt"
    },
    {
        "opy": "Initial Ally",
        "en": "Initial Ally"
    },
    {
        "opy": "Initial Allies",
        "en": "Initial Allies"
    },
    {
        "opy": "Initial",
        "en": "Initial"
    },
    {
        "opy": "Incoming",
        "en": "Incoming"
    },
    {
        "opy": "Income",
        "en": "Income"
    },
    {
        "opy": "In View",
        "en": "In View"
    },
    {
        "opy": "I Tried",
        "en": "I Tried"
    },
    {
        "opy": "I Give Up",
        "en": "I Give Up"
    },
    {
        "opy": "Hunting",
        "en": "Hunting"
    },
    {
        "opy": "Hunters",
        "en": "Hunters"
    },
    {
        "opy": "Hunter",
        "en": "Hunter"
    },
    {
        "opy": "Hunted",
        "en": "Hunted"
    },
    {
        "opy": "Hunt",
        "en": "Hunt"
    },
    {
        "opy": "Huh",
        "en": "Huh"
    },
    {
        "opy": "Hostages",
        "en": "Hostages"
    },
    {
        "opy": "Hostage",
        "en": "Hostage"
    },
    {
        "opy": "Hmmm",
        "en": "Hmmm"
    },
    {
        "opy": "Hitting",
        "en": "Hitting"
    },
    {
        "opy": "Hit",
        "en": "Hit"
    },
    {
        "opy": "High Scores",
        "en": "High Scores"
    },
    {
        "opy": "High Score",
        "en": "High Score"
    },
    {
        "opy": "Hiding",
        "en": "Hiding"
    },
    {
        "opy": "Hide",
        "en": "Hide"
    },
    {
        "opy": "Hidden",
        "en": "Hidden"
    },
    {
        "opy": "Heroes",
        "en": "Heroes"
    },
    {
        "opy": "Hero",
        "en": "Hero"
    },
    {
        "opy": "Here",
        "en": "Here"
    },
    {
        "opy": "Help",
        "en": "Help"
    },
    {
        "opy": "Hello",
        "en": "Hello"
    },
    {
        "opy": "Height",
        "en": "Height"
    },
    {
        "opy": "Hearts",
        "en": "Hearts"
    },
    {
        "opy": "Heart",
        "en": "Heart"
    },
    {
        "opy": "Healing",
        "en": "Healing"
    },
    {
        "opy": "Healers",
        "en": "Healers"
    },
    {
        "opy": "Healer",
        "en": "Healer"
    },
    {
        "opy": "Healed",
        "en": "Healed"
    },
    {
        "opy": "Heal",
        "en": "Heal"
    },
    {
        "opy": "Hands",
        "en": "Hands"
    },
    {
        "opy": "Hand",
        "en": "Hand"
    },
    {
        "opy": "Hacking",
        "en": "Hacking"
    },
    {
        "opy": "Hacked",
        "en": "Hacked"
    },
    {
        "opy": "Hack",
        "en": "Hack"
    },
    {
        "opy": "Guilty",
        "en": "Guilty"
    },
    {
        "opy": "Green",
        "en": "Green"
    },
    {
        "opy": "Goodbye",
        "en": "Goodbye"
    },
    {
        "opy": "Good Luck",
        "en": "Good Luck"
    },
    {
        "opy": "Good",
        "en": "Good"
    },
    {
        "opy": "Going",
        "en": "Going"
    },
    {
        "opy": "Goals",
        "en": "Goals"
    },
    {
        "opy": "Goal",
        "en": "Goal"
    },
    {
        "opy": "Go",
        "en": "Go"
    },
    {
        "opy": "Gg",
        "en": "Gg"
    },
    {
        "opy": "Games Won",
        "en": "Games Won"
    },
    {
        "opy": "Games Lost",
        "en": "Games Lost"
    },
    {
        "opy": "Games",
        "en": "Games"
    },
    {
        "opy": "Game",
        "en": "Game"
    },
    {
        "opy": "Frozen",
        "en": "Frozen"
    },
    {
        "opy": "Freezing",
        "en": "Freezing"
    },
    {
        "opy": "Freeze",
        "en": "Freeze"
    },
    {
        "opy": "Found",
        "en": "Found"
    },
    {
        "opy": "Forward",
        "en": "Forward"
    },
    {
        "opy": "Forms",
        "en": "Forms"
    },
    {
        "opy": "Form",
        "en": "Form"
    },
    {
        "opy": "Folding",
        "en": "Folding"
    },
    {
        "opy": "Folded",
        "en": "Folded"
    },
    {
        "opy": "Fold",
        "en": "Fold"
    },
    {
        "opy": "Flying",
        "en": "Flying"
    },
    {
        "opy": "Fly",
        "en": "Fly"
    },
    {
        "opy": "Flown",
        "en": "Flown"
    },
    {
        "opy": "Finishing",
        "en": "Finishing"
    },
    {
        "opy": "Finished",
        "en": "Finished"
    },
    {
        "opy": "Finish",
        "en": "Finish"
    },
    {
        "opy": "Finding",
        "en": "Finding"
    },
    {
        "opy": "Find",
        "en": "Find"
    },
    {
        "opy": "Final Upgrade",
        "en": "Final Upgrade"
    },
    {
        "opy": "Final Time",
        "en": "Final Time"
    },
    {
        "opy": "Final Targets",
        "en": "Final Targets"
    },
    {
        "opy": "Final Target",
        "en": "Final Target"
    },
    {
        "opy": "Final Round",
        "en": "Final Round"
    },
    {
        "opy": "Final Players",
        "en": "Final Players"
    },
    {
        "opy": "Final Player",
        "en": "Final Player"
    },
    {
        "opy": "Final Phase",
        "en": "Final Phase"
    },
    {
        "opy": "Final Objects",
        "en": "Final Objects"
    },
    {
        "opy": "Final Objective",
        "en": "Final Objective"
    },
    {
        "opy": "Final Object",
        "en": "Final Object"
    },
    {
        "opy": "Final Mission",
        "en": "Final Mission"
    },
    {
        "opy": "Final Level",
        "en": "Final Level"
    },
    {
        "opy": "Final Item",
        "en": "Final Item"
    },
    {
        "opy": "Final Hostages",
        "en": "Final Hostages"
    },
    {
        "opy": "Final Hostage",
        "en": "Final Hostage"
    },
    {
        "opy": "Final Heroes",
        "en": "Final Heroes"
    },
    {
        "opy": "Final Hero",
        "en": "Final Hero"
    },
    {
        "opy": "Final Game",
        "en": "Final Game"
    },
    {
        "opy": "Final Form",
        "en": "Final Form"
    },
    {
        "opy": "Final Enemy",
        "en": "Final Enemy"
    },
    {
        "opy": "Final Enemies",
        "en": "Final Enemies"
    },
    {
        "opy": "Final Checkpoint",
        "en": "Final Checkpoint"
    },
    {
        "opy": "Final Attempt",
        "en": "Final Attempt"
    },
    {
        "opy": "Final Ally",
        "en": "Final Ally"
    },
    {
        "opy": "Final Allies",
        "en": "Final Allies"
    },
    {
        "opy": "Final",
        "en": "Final"
    },
    {
        "opy": "Faults",
        "en": "Faults"
    },
    {
        "opy": "Fault",
        "en": "Fault"
    },
    {
        "opy": "Fastest",
        "en": "Fastest"
    },
    {
        "opy": "Faster",
        "en": "Faster"
    },
    {
        "opy": "Fast",
        "en": "Fast"
    },
    {
        "opy": "Far",
        "en": "Far"
    },
    {
        "opy": "Falling",
        "en": "Falling"
    },
    {
        "opy": "Fallen",
        "en": "Fallen"
    },
    {
        "opy": "Fall",
        "en": "Fall"
    },
    {
        "opy": "Failure",
        "en": "Failure"
    },
    {
        "opy": "Failing",
        "en": "Failing"
    },
    {
        "opy": "Failed",
        "en": "Failed"
    },
    {
        "opy": "Facing",
        "en": "Facing"
    },
    {
        "opy": "Faces",
        "en": "Faces"
    },
    {
        "opy": "Face",
        "en": "Face"
    },
    {
        "opy": "Extreme",
        "en": "Extreme"
    },
    {
        "opy": "Experience",
        "en": "Experience"
    },
    {
        "opy": "Exit",
        "en": "Exit"
    },
    {
        "opy": "Excellent",
        "en": "Excellent"
    },
    {
        "opy": "Escorting",
        "en": "Escorting"
    },
    {
        "opy": "Escorted",
        "en": "Escorted"
    },
    {
        "opy": "Escort",
        "en": "Escort"
    },
    {
        "opy": "Entrance",
        "en": "Entrance"
    },
    {
        "opy": "Enemy",
        "en": "Enemy"
    },
    {
        "opy": "Enemies",
        "en": "Enemies"
    },
    {
        "opy": "Eliminations",
        "en": "Eliminations"
    },
    {
        "opy": "Elimination",
        "en": "Elimination"
    },
    {
        "opy": "Eliminating",
        "en": "Eliminating"
    },
    {
        "opy": "Eliminated",
        "en": "Eliminated"
    },
    {
        "opy": "Eliminate",
        "en": "Eliminate"
    },
    {
        "opy": "East",
        "en": "East"
    },
    {
        "opy": "Dying",
        "en": "Dying"
    },
    {
        "opy": "Dropping",
        "en": "Dropping"
    },
    {
        "opy": "Dropped",
        "en": "Dropped"
    },
    {
        "opy": "Drop",
        "en": "Drop"
    },
    {
        "opy": "Drawn",
        "en": "Drawn"
    },
    {
        "opy": "Drawing",
        "en": "Drawing"
    },
    {
        "opy": "Draw",
        "en": "Draw"
    },
    {
        "opy": "Downloading",
        "en": "Downloading"
    },
    {
        "opy": "Downloaded",
        "en": "Downloaded"
    },
    {
        "opy": "Download",
        "en": "Download"
    },
    {
        "opy": "Down",
        "en": "Down"
    },
    {
        "opy": "Domes",
        "en": "Domes"
    },
    {
        "opy": "Dome",
        "en": "Dome"
    },
    {
        "opy": "Dodging",
        "en": "Dodging"
    },
    {
        "opy": "Dodged",
        "en": "Dodged"
    },
    {
        "opy": "Dodge",
        "en": "Dodge"
    },
    {
        "opy": "Distances",
        "en": "Distances"
    },
    {
        "opy": "Distance",
        "en": "Distance"
    },
    {
        "opy": "Disconnecting",
        "en": "Disconnecting"
    },
    {
        "opy": "Disconnected",
        "en": "Disconnected"
    },
    {
        "opy": "Disconnect",
        "en": "Disconnect"
    },
    {
        "opy": "Discarding",
        "en": "Discarding"
    },
    {
        "opy": "Discarded",
        "en": "Discarded"
    },
    {
        "opy": "Discard",
        "en": "Discard"
    },
    {
        "opy": "Die",
        "en": "Die"
    },
    {
        "opy": "Diamonds",
        "en": "Diamonds"
    },
    {
        "opy": "Diamond",
        "en": "Diamond"
    },
    {
        "opy": "Dexterity",
        "en": "Dexterity"
    },
    {
        "opy": "Detecting",
        "en": "Detecting"
    },
    {
        "opy": "Detected",
        "en": "Detected"
    },
    {
        "opy": "Detect",
        "en": "Detect"
    },
    {
        "opy": "Destroying",
        "en": "Destroying"
    },
    {
        "opy": "Destroyed",
        "en": "Destroyed"
    },
    {
        "opy": "Destroy",
        "en": "Destroy"
    },
    {
        "opy": "Destabilizing",
        "en": "Destabilizing"
    },
    {
        "opy": "Destabilized",
        "en": "Destabilized"
    },
    {
        "opy": "Destabilize",
        "en": "Destabilize"
    },
    {
        "opy": "Depth",
        "en": "Depth"
    },
    {
        "opy": "Delivering",
        "en": "Delivering"
    },
    {
        "opy": "Delivered",
        "en": "Delivered"
    },
    {
        "opy": "Deliver",
        "en": "Deliver"
    },
    {
        "opy": "Defence",
        "en": "Defence"
    },
    {
        "opy": "Defending",
        "en": "Defending"
    },
    {
        "opy": "Defended",
        "en": "Defended"
    },
    {
        "opy": "Defend",
        "en": "Defend"
    },
    {
        "opy": "Defeat",
        "en": "Defeat"
    },
    {
        "opy": "Decks",
        "en": "Decks"
    },
    {
        "opy": "Deck",
        "en": "Deck"
    },
    {
        "opy": "Dealt",
        "en": "Dealt"
    },
    {
        "opy": "Dealing",
        "en": "Dealing"
    },
    {
        "opy": "Deal",
        "en": "Deal"
    },
    {
        "opy": "Dead",
        "en": "Dead"
    },
    {
        "opy": "Danger",
        "en": "Danger"
    },
    {
        "opy": "Damaging",
        "en": "Damaging"
    },
    {
        "opy": "Damaged",
        "en": "Damaged"
    },
    {
        "opy": "Damage",
        "en": "Damage"
    },
    {
        "opy": "Current Upgrade",
        "en": "Current Upgrade"
    },
    {
        "opy": "Current Targets",
        "en": "Current Targets"
    },
    {
        "opy": "Current Target",
        "en": "Current Target"
    },
    {
        "opy": "Current Round",
        "en": "Current Round"
    },
    {
        "opy": "Current Players",
        "en": "Current Players"
    },
    {
        "opy": "Current Player",
        "en": "Current Player"
    },
    {
        "opy": "Current Phase",
        "en": "Current Phase"
    },
    {
        "opy": "Current Objects",
        "en": "Current Objects"
    },
    {
        "opy": "Current Objective",
        "en": "Current Objective"
    },
    {
        "opy": "Current Object",
        "en": "Current Object"
    },
    {
        "opy": "Current Mission",
        "en": "Current Mission"
    },
    {
        "opy": "Current Level",
        "en": "Current Level"
    },
    {
        "opy": "Current Hostages",
        "en": "Current Hostages"
    },
    {
        "opy": "Current Hostage",
        "en": "Current Hostage"
    },
    {
        "opy": "Current Heroes",
        "en": "Current Heroes"
    },
    {
        "opy": "Current Hero",
        "en": "Current Hero"
    },
    {
        "opy": "Current Game",
        "en": "Current Game"
    },
    {
        "opy": "Current Form",
        "en": "Current Form"
    },
    {
        "opy": "Current Enemy",
        "en": "Current Enemy"
    },
    {
        "opy": "Current Enemies",
        "en": "Current Enemies"
    },
    {
        "opy": "Current Checkpoint",
        "en": "Current Checkpoint"
    },
    {
        "opy": "Current Attempt",
        "en": "Current Attempt"
    },
    {
        "opy": "Current Ally",
        "en": "Current Ally"
    },
    {
        "opy": "Current Allies",
        "en": "Current Allies"
    },
    {
        "opy": "Current",
        "en": "Current"
    },
    {
        "opy": "Crouching",
        "en": "Crouching"
    },
    {
        "opy": "Crouched",
        "en": "Crouched"
    },
    {
        "opy": "Crouch",
        "en": "Crouch"
    },
    {
        "opy": "Critical",
        "en": "Critical"
    },
    {
        "opy": "Credits",
        "en": "Credits"
    },
    {
        "opy": "Credit",
        "en": "Credit"
    },
    {
        "opy": "Corrupting",
        "en": "Corrupting"
    },
    {
        "opy": "Corrupted",
        "en": "Corrupted"
    },
    {
        "opy": "Corrupt",
        "en": "Corrupt"
    },
    {
        "opy": "Cooldowns",
        "en": "Cooldowns"
    },
    {
        "opy": "Cooldown",
        "en": "Cooldown"
    },
    {
        "opy": "Control Points",
        "en": "Control Points"
    },
    {
        "opy": "Control Point",
        "en": "Control Point"
    },
    {
        "opy": "Constitution",
        "en": "Constitution"
    },
    {
        "opy": "Connecting",
        "en": "Connecting"
    },
    {
        "opy": "Connected",
        "en": "Connected"
    },
    {
        "opy": "Connect",
        "en": "Connect"
    },
    {
        "opy": "Congratulations",
        "en": "Congratulations"
    },
    {
        "opy": "Condition",
        "en": "Condition"
    },
    {
        "opy": "Come Here",
        "en": "Come Here"
    },
    {
        "opy": "Combo",
        "en": "Combo"
    },
    {
        "opy": "Clubs",
        "en": "Clubs"
    },
    {
        "opy": "Club",
        "en": "Club"
    },
    {
        "opy": "Clouds",
        "en": "Clouds"
    },
    {
        "opy": "Cloud",
        "en": "Cloud"
    },
    {
        "opy": "Checkpoints",
        "en": "Checkpoints"
    },
    {
        "opy": "Checkpoint",
        "en": "Checkpoint"
    },
    {
        "opy": "Chasing",
        "en": "Chasing"
    },
    {
        "opy": "Chased",
        "en": "Chased"
    },
    {
        "opy": "Chase",
        "en": "Chase"
    },
    {
        "opy": "Charisma",
        "en": "Charisma"
    },
    {
        "opy": "Challenge Accepted",
        "en": "Challenge Accepted"
    },
    {
        "opy": "Center",
        "en": "Center"
    },
    {
        "opy": "Caution",
        "en": "Caution"
    },
    {
        "opy": "Capturing",
        "en": "Capturing"
    },
    {
        "opy": "Captured",
        "en": "Captured"
    },
    {
        "opy": "Capture",
        "en": "Capture"
    },
    {
        "opy": "Buying",
        "en": "Buying"
    },
    {
        "opy": "Buy",
        "en": "Buy"
    },
    {
        "opy": "Burnt",
        "en": "Burnt"
    },
    {
        "opy": "Burning",
        "en": "Burning"
    },
    {
        "opy": "Burn",
        "en": "Burn"
    },
    {
        "opy": "Built",
        "en": "Built"
    },
    {
        "opy": "Building",
        "en": "Building"
    },
    {
        "opy": "Build",
        "en": "Build"
    },
    {
        "opy": "Bought",
        "en": "Bought"
    },
    {
        "opy": "Bosses",
        "en": "Bosses"
    },
    {
        "opy": "Boss",
        "en": "Boss"
    },
    {
        "opy": "Bonuses",
        "en": "Bonuses"
    },
    {
        "opy": "Bonus",
        "en": "Bonus"
    },
    {
        "opy": "Blue",
        "en": "Blue"
    },
    {
        "opy": "Blocking",
        "en": "Blocking"
    },
    {
        "opy": "Blocked",
        "en": "Blocked"
    },
    {
        "opy": "Block",
        "en": "Block"
    },
    {
        "opy": "Bids",
        "en": "Bids"
    },
    {
        "opy": "Bid",
        "en": "Bid"
    },
    {
        "opy": "Better",
        "en": "Better"
    },
    {
        "opy": "Best",
        "en": "Best"
    },
    {
        "opy": "Banning",
        "en": "Banning"
    },
    {
        "opy": "Banned",
        "en": "Banned"
    },
    {
        "opy": "Ban",
        "en": "Ban"
    },
    {
        "opy": "Bad",
        "en": "Bad"
    },
    {
        "opy": "Backward",
        "en": "Backward"
    },
    {
        "opy": "Avoiding",
        "en": "Avoiding"
    },
    {
        "opy": "Avoided",
        "en": "Avoided"
    },
    {
        "opy": "Avoid",
        "en": "Avoid"
    },
    {
        "opy": "Average",
        "en": "Average"
    },
    {
        "opy": "Attempts",
        "en": "Attempts"
    },
    {
        "opy": "Attempt",
        "en": "Attempt"
    },
    {
        "opy": "Attacking",
        "en": "Attacking"
    },
    {
        "opy": "Attacked",
        "en": "Attacked"
    },
    {
        "opy": "Attack",
        "en": "Attack"
    },
    {
        "opy": "Angle",
        "en": "Angle"
    },
    {
        "opy": "Ammunition",
        "en": "Ammunition"
    },
    {
        "opy": "Ally",
        "en": "Ally"
    },
    {
        "opy": "Allies",
        "en": "Allies"
    },
    {
        "opy": "Alive",
        "en": "Alive"
    },
    {
        "opy": "Alert",
        "en": "Alert"
    },
    {
        "opy": "Ability 2",
        "en": "Ability 2"
    },
    {
        "opy": "Ability 1",
        "en": "Ability 1"
    },
    {
        "opy": "Ability",
        "en": "Ability"
    },
    {
        "opy": "Abilities",
        "en": "Abilities"
    },
    {
        "opy": "???",
        "en": "???"
    },
    {
        "opy": "??",
        "en": "??"
    },
    {
        "opy": "?",
        "en": "?"
    },
    {
        "opy": "...",
        "en": "..."
    },
    {
        "opy": "----------",
        "en": "----------"
    },
    {
        "opy": "*",
        "en": "*"
    },
    {
        "opy": "!!!",
        "en": "!!!"
    },
    {
        "opy": "!!",
        "en": "!!"
    },
    {
        "opy": "!",
        "en": "!"
    }
];

var prefixStrKw = [
    {
        "opy": "#{0}",
        "en": "#{0}"
    },
    {
        "opy": "-> {0}",
        "en": "-> {0}"
    },
    {
        "opy": "<-> {0}",
        "en": "<-> {0}"
    },
    {
        "opy": "<- {0}",
        "en": "<- {0}"
    },
    {
        "opy": "Round {0}",
        "en": "Round {0}"
    }
];

var postfixStrKw = [
    {
        "opy": "{0} ->",
        "en": "{0} ->"
    },
    {
        "opy": "{0} <->",
        "en": "{0} <->"
    },
    {
        "opy": "{0} <-",
        "en": "{0} <-"
    },
    {
        "opy": "{0} M/S",
        "en": "{0} M/S"
    },
    {
        "opy": "{0} M",
        "en": "{0} M"
    },
    {
        "opy": "{0} Sec",
        "en": "{0} Sec"
    },
    {
        "opy": "{0}!!!",
        "en": "{0}!!!"
    },
    {
        "opy": "{0}!!",
        "en": "{0}!!"
    },
    {
        "opy": "{0}!",
        "en": "{0}!"
    },
    {
        "opy": "{0}%",
        "en": "{0}%"
    },
    {
        "opy": "{0}:",
        "en": "{0}:"
    },
    {
        "opy": "{0}???",
        "en": "{0}???"
    },
    {
        "opy": "{0}??",
        "en": "{0}??"
    },
    {
        "opy": "{0}?",
        "en": "{0}?"
    }
];

var binaryStrKw = [
    {
        "opy": "{0} -> {1}",
        "en": "{0} -> {1}"
    },
    {
        "opy": "{0} - {1}",
        "en": "{0} - {1}"
    },
    {
        "opy": "{0} != {1}",
        "en": "{0} != {1}"
    },
    {
        "opy": "{0} * {1}",
        "en": "{0} * {1}"
    },
    {
        "opy": "{0} / {1}",
        "en": "{0} / {1}"
    },
    {
        "opy": "{0} + {1}",
        "en": "{0} + {1}"
    },
    {
        "opy": "{0} <-> {1}",
        "en": "{0} <-> {1}"
    },
    {
        "opy": "{0} <- {1}",
        "en": "{0} <- {1}"
    },
    {
        "opy": "{0} <= {1}",
        "en": "{0} <= {1}"
    },
    {
        "opy": "{0} < {1}",
        "en": "{0} < {1}"
    },
    {
        "opy": "{0} == {1}",
        "en": "{0} == {1}"
    },
    {
        "opy": "{0} = {1}",
        "en": "{0} = {1}"
    },
    {
        "opy": "{0} >= {1}",
        "en": "{0} >= {1}"
    },
    {
        "opy": "{0} > {1}",
        "en": "{0} > {1}"
    },
    {
        "opy": "{0} And {1}",
        "en": "{0} And {1}"
    },
    {
        "opy": "{0} Vs {1}",
        "en": "{0} Vs {1}"
    },
    {
        "opy": "{0}, {1}",
        "en": "{0}, {1}"
    },
    {
        "opy": "{0}: {1}",
        "en": "{0}: {1}"
    },
    {
        "opy": "{0}:{1}",
        "en": "{0}:{1}"
    },
    {
        "opy": "{0} {1}",
        "en": "{0} {1}"
    }
];

var ternaryStrKw = [
    {
        "opy": "{0} - {1} - {2}",
        "en": "{0} - {1} - {2}"
    },
    {
        "opy": "{0} : {1} : {2}",
        "en": "{0} : {1} : {2}"
    },
    {
        "opy": "{0} {1} {2}",
        "en": "{0} {1} {2}"
    },
    {
        "opy": "{0}, {1}, And {2}",
        "en": "{0}, {1}, And {2}"
    },
    {
        "opy": "{0}: {1} And {2}",
        "en": "{0}: {1} And {2}"
    }
];

var surroundStrKw = [
    {
        "opy": "({0})",
        "en": "({0})"
    },
    {
        "opy": "¡{0}!",
        "en": "¡{0}!"
    },
    {
        "opy": "¿{0}?",
        "en": "¿{0}?"
    }
];

var stringKw = normalStrKw.concat(prefixStrKw).concat(postfixStrKw).concat(binaryStrKw).concat(ternaryStrKw).concat(surroundStrKw).concat(emptyStrKw);

/*for (var hero of getConstantKw("HERO CONSTANT")) {
	stringKw.push(hero.opy);
}*/

var strTokens = [];

//Generate string tokens
//normal strings
for (var j = 0; j < normalStrKw.length; j++) {
	strTokens.push(normalStrKw[j].opy.toLowerCase());
}

//prefix strings
for (var j = 0; j < prefixStrKw.length; j++) {
	strTokens.push(prefixStrKw[j].opy.substring(0, prefixStrKw[j].opy.indexOf("{0}")).toLowerCase());
}

//postfix strings
for (var j = 0; j < postfixStrKw.length; j++) {
	strTokens.push(postfixStrKw[j].opy.substring("{0}".length).toLowerCase());
}

//ternary strings
for (var j = 0; j < ternaryStrKw.length; j++) {
	strTokens.push(ternaryStrKw[j].opy.substring("{0}".length, ternaryStrKw[j].opy.indexOf("{1}")).toLowerCase());
	strTokens.push(ternaryStrKw[j].opy.substring(ternaryStrKw[j].opy.indexOf("{1}")+"{1}".length, ternaryStrKw[j].opy.indexOf("{2}")).toLowerCase());
}

//binary strings
for (var j = 0; j < binaryStrKw.length; j++) {
	strTokens.push(binaryStrKw[j].opy.substring("{0}".length, binaryStrKw[j].opy.indexOf("{1}")).toLowerCase());
}


//surround strings
for (var j = 0; j < surroundStrKw.length; j++) {
	strTokens.push(surroundStrKw[j].opy[0].toLowerCase())
	strTokens.push(surroundStrKw[j].opy[surroundStrKw[j].opy.length-1].toLowerCase())
}

//heroes
for (var hero of getConstantKw("HERO CONSTANT")) {
	strTokens.push(hero.opy.toLowerCase().substring("Hero.".length));
}

//Sort reverse alphabetical order for greediness
strTokens = strTokens.sort().reverse();
