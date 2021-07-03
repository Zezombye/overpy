
/*

This is a standalone pathmap generator, used to generate pathmaps for use in this module.
Make sure to save often and to report any buggy behavior by the bot.

*/

settings {
    "main": {
        "description": "Zez's Pathmap Editor | v1.1.0 | FNTOS | For use with OverPy:\nhttps://github.com/Zezombye/OverPy"
    },
    "lobby": {
        "ffaSlots": 1,
        "team1Slots": 1,
        "team2Slots": 0,
    },
    "gamemodes": {
        "ffa": {
            "enabledMaps": [
                #"necropolis"
            ]
        },
        "skirmish": {
            "enabledMaps": [
                #"workshopIsland",
            ]
        },
        "elimination": {
            "enabledMaps": [
                "lijiangGarden",
            ]
        },
        "general": {
            "gamemodeStartTrigger": "manual",
            "heroLimit": "off",
            "respawnTime%": 30
        }
    },
    "heroes": {
        "allTeams": {
            "general": {
                "abilityCooldown%": 0
            }
        }
    }
}

#!extension playMoreEffects
#!extension beamEffects

#!define RENDER_DISTANCE 50
#!define CONNECTION_DISTANCE 15
#!define NB_BEAM_RENDER 20
#!define NODE_RADIUS 1

enum ConnectionTest:
    IN_PROGRESS,
    FAIL,
    SUCCESS,


globalvar nodePositions = []

globalvar nodeConnections = []

globalvar nodeEffects = []
globalvar nodeTexts = []
globalvar iwtPosIdx
globalvar nodeRemoveIdx
globalvar nodeIdx
globalvar neighborNodeIdx
globalvar spherePosIdx
globalvar raycastTestIdx
globalvar i
globalvar isGenerating = false
globalvar testDummy
globalvar makeBotWalk
globalvar wasOffGround
globalvar connectionTestStatus
globalvar lastTestedNode = 0
globalvar nodeToShowBeams = -1
globalvar nearestNodeToHostIdx
globalvar beamIdx


rule "paste your save here (nodePositions + nodeConnections)":
    @Delimiter
    /*
    #necropolis
    nodePositions = [vect(26.784, 1, 3.753), vect(26.896, 1, -3.445), vect(18.764, 1, -8.856), vect(18.792, -2, -0.038), vect(19.073, 1, 8.691), vect(12.551, 1.001, -4.252), vect(12.624, 1.004, 3.835), vect(12.923, -3.891, -0.063), vect(3.674, -6, -0.065), vect(12.685, 1.003, -11.521), vect(5.273, 1.007, -11.493), vect(5.356, 1.003, -4.035), vect(5.32, 1.004, 4.264), vect(5.196, 1.007, 11.865), vect(12.686, 1.003, 12.028), vect(17.426, 1, 13.574), vect(21.459, 1, 12.36), vect(29.822, 5.012, 21.441), vect(23.989, 5.012, 27.429), vect(17.285, 1, -13.813), vect(-4.868, 1.005, 4.852), vect(-4.676, 1.006, 12.001), vect(-11.891, 1.002, 12.442), vect(-12.012, 1.002, 4.843), vect(-12.276, 1.004, -5.083), vect(-4.984, 1.007, -5.206), vect(-4.935, 1.006, -11.808), vect(-11.931, 1.002, -11.828), vect(-16.753, 2.064, -0.189), vect(-22.771, 3, 0.009), vect(-23.288, 3, -5.707), vect(-23.272, 3, 5.719), vect(-32.086, 2, 6.225), vect(-31.92, 1.998, -5.993), vect(-31.816, 3, -13.929), vect(-37.703, 3, 0.139), vect(-47.975, 5, 0.11), vect(-47.636, 6, -5.146), vect(-47.404, 6, 5.096), vect(-39.345, 9, 5.897), vect(-34.947, 9, 5.957), vect(-34.897, 9, -6.09), vect(-39.295, 9, -5.982), vect(-35.119, 9, 0.043), vect(-28.769, 9, -0.008), vect(-28.783, 9, 5.632), vect(-28.721, 9, -5.706), vect(-20.466, 10.978, -7.424), vect(-20.307, 10.978, 7.699), vect(-32.051, 3, 13.156), vect(-25.255, 4.643, 27.042), vect(-12.301, 3.01, 23.05), vect(-24.34, 1.562, 14.563), vect(-12.818, 1, 15.27), vect(-16.479, 3.018, 22.829), vect(-25.779, 3.608, 23.021), vect(-17.504, 7.287, 26.544), vect(-12.966, 7.287, 26.442), vect(-9.579, 8.326, 26.39), vect(0.943, 10.02, 26.109), vect(-5.539, 8.336, 16.335), vect(16.055, 8.297, 21.721), vect(13.771, 8.299, 15.282), vect(9.799, 10.021, 25.25), vect(7.708, 10.029, 21.063), vect(6.068, 10.604, 15.443), vect(0.737, 11.516, 15.585), vect(10.282, 3.001, 20.943), vect(-7.561, 3.002, 22.989), vect(0.996, 3.003, 22.301), vect(22.355, 1.001, -12.59), vect(29.012, 5.012, -22.207), vect(24.027, 5.012, -27.688), vect(15.849, 8.296, -21.149), vect(13.939, 8.298, -15.263), vect(10.078, 10.021, -24.604), vect(7.369, 10.032, -21.054), vect(5.598, 10.604, -15.32), vect(1.389, 10.021, -26.009), vect(-12.238, 3.009, -22.92), vect(-25.729, 4.817, -27.695), vect(-24.449, 1.564, -14.44), vect(-24.582, 3.525, -23.054), vect(-16.702, 3.02, -23.118), vect(-13.324, 1, -15.874), vect(-17.012, 7.287, -26.972), vect(-9.313, 8.326, -26.972), vect(-5.306, 8.337, -16.431), vect(-4.847, 8.286, -25.847), vect(-0.514, 10.604, -15.604), vect(-9.424, 10.611, -16.506), vect(-9.042, 10.611, 16.156), vect(-12.815, 7.287, -27.191), vect(-32.036, 9.471, -11.162), vect(-25.648, 9.515, -11.561), vect(-25.533, 9.516, 11.526), vect(-32.118, 9.509, 11.669), vect(-33.003, 2, 0.177), vect(-16.356, -4.002, -0.133), vect(-3.758, -6, -0.026), vect(-16.532, 1, 13.111), vect(-16.514, 1, -13.054)]
    nodeConnections = [[1, 4, 6, 15, 16], [0, 2, 5, 19, 70], [1, 3, 5, 7, 9, 10, 19, 70], [2, 4, 7, 16], [0, 3, 6, 7, 12, 13, 14, 15, 16], [2, 1, 3, 4, 6, 7, 8, 9, 11, 12, 19, 70], [4, 0, 2, 3, 5, 7, 8, 11, 12, 14, 15, 16], [3, 8], [7], [2, 5, 3, 7, 10, 19, 70], [2, 9, 8, 11, 19, 25, 26], [5, 6, 10, 3, 7, 8, 12, 26, 99], [4, 5, 6, 11, 3, 7, 8, 13, 21, 99], [4, 12, 8, 14, 15, 21], [4, 6, 13, 3, 7, 15, 16], [0, 4, 6, 13, 14, 3, 16, 67], [0, 4, 6, 14, 15, 3, 17, 67], [16, 18], [17, 61], [1, 2, 5, 9, 10, 3, 70], [13, 21, 23, 24, 25, 28, 99], [13, 20, 12, 22, 53, 99, 100], [21, 23, 28, 51, 52, 53, 54, 100], [20, 22, 24, 25, 28, 29, 53, 99, 100], [20, 23, 25, 27, 28, 84, 99, 101], [20, 23, 24, 8, 10, 26, 99], [10, 25, 11, 27, 84, 99, 101], [24, 26, 28, 79, 81, 83, 84, 101], [20, 22, 23, 24, 25, 27, 29, 100, 101], [28, 23, 30, 31], [29, 31, 33], [29, 30, 32], [31, 33, 35, 49, 97], [32, 30, 34, 35, 97], [33, 81, 82, 97], [32, 33, 36, 97], [35, 37, 38], [36, 38, 42], [36, 37, 39], [38, 40, 45, 95], [39, 38, 41, 43, 44, 45, 48, 49, 95, 96, 97], [40, 34, 37, 42, 43, 44, 46, 47, 93, 94, 97], [41, 37, 46, 94], [40, 41, 44, 45, 46, 49, 93, 94, 95, 96, 97], [40, 41, 43, 45, 46, 47, 48, 49, 93, 94, 95, 96, 97], [39, 40, 44, 43, 46, 48, 49, 52, 95, 96, 97], [41, 42, 44, 45, 34, 43, 47, 81, 93, 94, 97], [24, 27, 28, 41, 44, 46, 84, 93, 101], [22, 23, 28, 40, 44, 45, 53, 100], [32, 52, 55, 97], [52, 54, 55, 56, 57], [22, 53, 54, 55, 68, 69, 100], [22, 49, 50, 53, 55, 100], [21, 22, 23, 51, 52, 54, 100], [51, 22, 53, 55, 68, 100], [50, 49, 51, 52, 54, 100], [50, 51, 52, 53, 54, 55, 57, 58, 100], [56, 50, 51, 53, 54, 55, 58, 59], [57, 51, 53, 54, 56, 59, 60], [57, 58, 60, 63, 64, 65, 66], [58, 20, 21, 22, 59], [14, 15, 18, 62, 63, 64], [61, 4, 6, 13, 14, 15, 16, 64], [59, 61, 62, 64, 65, 66], [59, 63, 13, 60, 61, 62, 65, 66], [12, 13, 14, 15, 21, 59, 60, 61, 62, 63, 64, 66], [13, 21, 59, 60, 62, 63, 64, 65, 91], [15, 16, 69], [51, 54, 69], [51, 67, 68], [1, 2, 5, 9, 19, 3, 71], [70, 72], [71, 73], [2, 9, 19, 72, 74, 75, 76], [73, 2, 5, 9, 10, 19, 70, 75, 76], [73, 74, 76, 77, 78], [75, 10, 73, 74, 77, 78, 87, 88, 88], [9, 10, 11, 26, 73, 74, 75, 76, 78, 87, 89], [75, 76, 77, 86, 87, 88, 89, 92], [27, 82, 83, 84, 101], [81, 82, 83, 85, 92], [27, 34, 80, 82, 84, 101], [80, 34, 79, 81, 83, 84, 101], [79, 27, 82, 84, 101], [24, 26, 27, 79, 81, 83, 101], [79, 80, 82, 83, 84, 86, 88, 92], [78, 79, 83, 84, 85, 87, 88, 92, 92], [86, 25, 26, 27, 88], [86, 87, 76, 78, 79, 83, 84, 85, 92], [77, 10, 25, 26, 74, 75, 76, 78, 86, 87, 88, 90], [26, 27, 79, 83, 84, 86, 87, 88, 89, 101], [21, 22, 51, 53, 54, 58, 59, 60, 66, 100], [85, 88, 78, 79, 80, 82, 83, 84, 86], [34, 41, 43, 44, 46, 47, 81, 94, 97, 94], [34, 41, 42, 43, 44, 46, 81, 82, 93, 101], [39, 40, 43, 44, 45, 49, 52, 55, 96, 100], [95, 40, 43, 44, 45, 49, 52, 55, 97], [32, 33, 34, 35, 49], [99, 100, 101], [98], [21, 22, 53, 51, 52, 98], [26, 27, 84, 79, 81, 83, 98]]
    */

    /*
    #workshop island
    nodePositions = [vect(-13.791, 0, 14.018), vect(-10.428, 0, 5.54), vect(-9.136, 0, 10.537), vect(-9.47, 0, -1.598)]
    nodeConnections = [[1, 2], [0, 2, 3], [0, 1, 3], [1, 2]]
    */

    #lijiang garden
    nodePositions = [vect(-81.978,96,128.382), vect(-91.553,94,127.851), vect(-103.348,94,128.192), vect(-106.137,94,134.083), vect(-76.918,96,143.979), vect(-80.902,96,154.222), vect(-80.382,96,136.763), vect(-89.731,97.007,137.049), vect(-83.81,96,148.365), vect(-88.892,97.007,153.785), vect(-89.927,97.007,144.794), vect(-91.71,97,161.379), vect(-103.598,94,161.708), vect(-105.205,94.029,154.601), vect(-121.93,94,143.679), vect(-113.901,94,139.743), vect(-113.965,94,146.152), vect(-104.714,94.029,143.031), vect(-96.437,95,142.538), vect(-79.976,98,161.058), vect(-75.012,98,161.973), vect(-63.348,98,161.847), vect(-57.557,98,161.834), vect(-58.406,94,168.055), vect(-47.904,98,167.447), vect(-47.917,98,163.81), vect(-69.74,94.5,151.048), vect(-55.979,93.992,155.767), vect(-55.993,94,160.272), vect(-43.345,94.219,159.8), vect(-37.389,95,150.096), vect(-40.011,98,163.982), vect(-38.185,94.88,159.283), vect(-39.11,94.9,139.487), vect(-68.375,93.994,144.012), vect(-57.764,93.99,139.519), vect(-50.499,94.398,146.529), vect(-51.394,94.021,151.041), vect(-52.597,95,138.734), vect(-61.356,93.999,151.872), vect(-58.047,93.991,145.139), vect(-44.562,95,153.198), vect(-33.785,98,164.394), vect(-26.179,98,180.2), vect(-20.093,97.9,180.264), vect(-7.041,98,183.335), vect(-6.944,97.998,173.706), vect(-33.24,98,179.664), vect(-26.934,98,166.91), vect(-33.767,94.05,168.754), vect(-30.015,94.001,159.532), vect(-11.807,94,177.979), vect(-26.131,94.05,171.437), vect(-17.685,94,174.614), vect(-2.4,94,178.043), vect(-31.223,93.998,149.974), vect(-26.86,93.998,142.284), vect(-20.769,96,134.484), vect(-13.197,95,127.522), vect(-12.17,95.192,116.311), vect(-7.922,96,116.182), vect(-8.23,94.05,135.148), vect(-12.436,94.05,139.981), vect(-12.651,94.147,154.225), vect(-4.735,94.147,161.784), vect(-6.467,94,149.958), vect(-2.75,94,156.145), vect(-2.604,94,143.834), vect(-7.393,94.147,143.06), vect(-4.736,95,126.828), vect(81.978,96,128.382), vect(91.553,94,127.851), vect(103.348,94,128.192), vect(106.137,94,134.083), vect(76.918,96,143.979), vect(80.902,96,154.222), vect(80.382,96,136.763), vect(89.731,97.007,137.049), vect(83.81,96,148.365), vect(88.892,97.007,153.785), vect(89.927,97.007,144.794), vect(91.71,97,161.379), vect(103.598,94,161.708), vect(105.205,94.029,154.601), vect(121.93,94,143.679), vect(113.901,94,139.743), vect(113.965,94,146.152), vect(104.714,94.029,143.031), vect(96.437,95,142.538), vect(79.976,98,161.058), vect(75.012,98,161.973), vect(63.348,98,161.847), vect(57.557,98,161.834), vect(58.406,94,168.055), vect(47.904,98,167.447), vect(47.917,98,163.81), vect(69.74,94.5,151.048), vect(55.979,93.992,155.767), vect(55.993,94,160.272), vect(43.345,94.219,159.8), vect(37.389,95,150.096), vect(40.011,98,163.982), vect(38.185,94.88,159.283), vect(39.11,94.9,139.487), vect(68.375,93.994,144.012), vect(57.764,93.99,139.519), vect(50.499,94.398,146.529), vect(51.394,94.021,151.041), vect(52.597,95,138.734), vect(61.356,93.999,151.872), vect(58.047,93.991,145.139), vect(44.562,95,153.198), vect(33.785,98,164.394), vect(26.179,98,180.2), vect(20.093,97.9,180.264), vect(7.041,98,183.335), vect(6.944,97.998,173.706), vect(33.24,98,179.664), vect(26.934,98,166.91), vect(33.767,94.05,168.754), vect(30.015,94.001,159.532), vect(11.807,94,177.979), vect(26.131,94.05,171.437), vect(17.685,94,174.614), vect(2.4,94,178.043), vect(31.223,93.998,149.974), vect(26.86,93.998,142.284), vect(20.769,96,134.484), vect(13.197,95,127.522), vect(12.17,95.192,116.311), vect(7.922,96,116.182), vect(8.23,94.05,135.148), vect(12.436,94.05,139.981), vect(12.651,94.147,154.225), vect(4.735,94.147,161.784), vect(6.467,94,149.958), vect(2.75,94,156.145), vect(2.604,94,143.834), vect(7.393,94.147,143.06), vect(4.736,95,126.828)]
    nodeConnections = [[1, 6], [0, 2], [1, 3, 17], [2, 15, 17], [5, 6, 7, 8, 10, 26, 34], [4, 8, 10, 19, 26], [0, 4, 7, 8, 10], [4, 6, 8, 10], [4, 5, 6, 7, 9, 10, 19, 26], [8, 10, 11], [7, 9, 4, 5, 6, 8], [9, 12], [11, 13], [12, 16, 17], [15, 16], [3, 14, 16, 17], [13, 14, 15, 17], [2, 3, 13, 15, 16, 18], [17], [5, 8, 20], [19, 5, 21], [20, 22, 26, 39], [21, 23, 24, 25], [24, 27, 28], [22, 23, 25, 29], [22, 24, 23, 31, 32, 42], [4, 5, 8, 27, 34, 39, 40], [23, 26, 28, 36, 37, 39, 40, 41], [23, 27, 29, 36, 37], [28, 30, 32, 41, 50], [29, 32, 33, 36, 37, 41, 55, 56], [25, 29, 30, 32, 41, 42, 48], [29, 30, 41, 50], [30, 41], [26, 4, 35, 39, 40], [34, 37, 38, 40], [30, 27, 28, 37, 38, 39, 40, 41], [27, 28, 30, 35, 36, 38, 39, 40, 41], [36, 35, 37], [27, 34, 37, 26, 36, 40], [27, 34, 35, 36, 37, 39, 26], [30, 33, 36, 37, 27, 29, 32, 55], [25, 31, 29, 48, 49], [44, 47, 48, 49], [43, 45, 47, 51, 53], [44, 46, 51, 53], [45, 51, 53], [43, 44, 49], [31, 42, 43, 49], [47, 50, 52], [29, 49, 32, 52, 55], [53, 54], [49, 50, 53], [51, 52], [51], [41, 50, 30, 56], [55, 30, 57], [56, 58], [57, 59, 61, 62, 69], [58, 60], [59], [58, 62, 65, 68, 69], [61, 58, 63, 67, 68], [62, 64], [63], [61, 66, 67, 68], [65, 68], [62, 65, 68], [61, 62, 65, 66, 67], [58, 61]]


def updateIwts():

    for iwtPosIdx in range(len(nodePositions)):
        if distance(hostPlayer, nodePositions[iwtPosIdx]) > RENDER_DISTANCE:
            if nodeTexts[iwtPosIdx] != null:
                destroyInWorldText(nodeTexts[iwtPosIdx])
                nodeTexts[iwtPosIdx] = null
        else:
            if nodeTexts[iwtPosIdx] == null:
                createInWorldText(hostPlayer, iwtPosIdx, nodePositions[iwtPosIdx], 1.5, Clip.SURFACES, WorldTextReeval.VISIBILITY, Color.BLUE, SpecVisibility.DEFAULT)
                nodeTexts[iwtPosIdx] = getLastCreatedText()
        

rule "init":
    disableInspector()
    print("{} to place nodes\n{} to undo latest node\n{}+{} to generate connections".format(buttonString(Button.PRIMARY_FIRE), buttonString(Button.SECONDARY_FIRE), buttonString(Button.CROUCH), buttonString(Button.INTERACT)))
    print("nb of nodes: {}".format(len(nodePositions)))
    print("bot speed: {}".format(testDummy.getHorizontalSpeed()))

    createDummy(Hero.REINHARDT, Team.1 if getCurrentGamemode() != Gamemode.FFA else Team.ALL, 1, vect(0, -1000, 0), null)
    testDummy = getLastCreatedEntity()

    createEffect(hostPlayer, Effect.SPHERE, Color.ORANGE, updateEveryTick(hostPlayer.getPosition()), NODE_RADIUS, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

    progressBarHud(hostPlayer if isGenerating else [], nodeIdx/len(nodePositions)*100, "{} / {} nodes processed".format(nodeIdx, len(nodePositions)), HudPosition.TOP, 1, Color.BLUE, Color.BLUE, ProgressHudReeval.VISIBILITY_AND_VALUES, SpecVisibility.DEFAULT)

    updateIwts()

    lastTestedNode = len(nodeConnections) - 1
    for i in range(len(nodeConnections), len(nodePositions)):
        nodeConnections[i] = []

    for i in range(NB_BEAM_RENDER):
        createBeam(hostPlayer if nodeToShowBeams >= 0 and len(nodeConnections[nodeToShowBeams]) > evalOnce(i) else [], Beam.GRAPPLE, nodePositions[nodeToShowBeams]+vect(0,1,0), nodePositions[nodeConnections[nodeToShowBeams][evalOnce(i)]]+vect(0,1,0), null, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

    createEffect(hostPlayer if nodeToShowBeams >= 0 else [], Effect.SPHERE, Color.AQUA, nodePositions[nodeToShowBeams]+vect(0,1,0), 0.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

    hudHeader(hostPlayer if nodeToShowBeams >= 0 and len(nodeConnections[nodeToShowBeams]) > NB_BEAM_RENDER else [], "showing {}/{} beams".format(NB_BEAM_RENDER, len(nodeConnections[nodeToShowBeams])), HudPosition.TOP, 3, Color.RED, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.DEFAULT)

    #create effects from save
    for spherePosIdx in range(len(nodePositions)):
        createEffect(hostPlayer, Effect.SPHERE, Color.BLUE, evalOnce(nodePositions[spherePosIdx]), NODE_RADIUS, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        nodeEffects[iwtPosIdx] = getLastCreatedEntity()
        wait()
        
rule "dummy init":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), nodePositions[neighborNodeIdx]), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 9999)
    

rule "dummy walk":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    eventPlayer.teleport(nodePositions[nodeIdx])
    eventPlayer.startForcingPosition(nodePositions[nodeIdx], false)
    wait()
    eventPlayer.stopForcingPosition()
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getPosition(), nodePositions[neighborNodeIdx]), 1, Relativity.TO_WORLD, Throttle.REPLACE_EXISTING, ThrottleReeval.DIRECTION_AND_MAGNITUDE)

rule "dummy detect off ground":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    @Condition not updateEveryTick(eventPlayer.isOnGround())
    wait(0.05, Wait.ABORT_WHEN_FALSE)
    wasOffGround = true

rule "dummy no longer walk":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition not makeBotWalk
    eventPlayer.stopThrottleInDirection()

rule "dummy made it":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    @Condition eventPlayer.getPosition().y > nodePositions[neighborNodeIdx].y - NODE_RADIUS
    @Condition updateEveryTick(distance(eventPlayer.getPosition()*vect(1,0,1), nodePositions[neighborNodeIdx]*vect(1,0,1))) < NODE_RADIUS
    @Condition updateEveryTick(isInLoS(eventPlayer.getEyePosition(), nodePositions[neighborNodeIdx]+vect(0,1,0), BarrierLos.PASS_THROUGH_BARRIERS))
    connectionTestStatus = ConnectionTest.SUCCESS

rule "dummy jump over cliffs":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    @Condition updateEveryTick(isInLoS(eventPlayer.getPosition()+normalize(eventPlayer.getThrottle())*0.2+vect(0,0.5,0), eventPlayer.getPosition()+normalize(eventPlayer.getThrottle())*0.2-vect(0,0.5,0), BarrierLos.PASS_THROUGH_BARRIERS))
    do:
        eventPlayer.forceButtonPress(Button.JUMP)
        wait()
    while RULE_CONDITION

rule "dummy jump over obstacles":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    @Condition eventPlayer.getHorizontalSpeed() < 3
    do:
        eventPlayer.forceButtonPress(Button.JUMP)
        wait()
    while RULE_CONDITION

rule "fail if stuck for 0.5 second":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition makeBotWalk
    @Condition eventPlayer.getHorizontalSpeed() < 3
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    connectionTestStatus = ConnectionTest.FAIL

rule "dummy died":
    @Event eachPlayer
    @Condition eventPlayer.isDummy()
    @Condition eventPlayer.isDead()
    do:
        eventPlayer.respawn()
        connectionTestStatus = ConnectionTest.FAIL
        wait()
    while RULE_CONDITION

rule "disable primary and secondary":
    @Event eachPlayer
    eventPlayer.setPrimaryFireEnabled(false)
    eventPlayer.setSecondaryFireEnabled(false)

rule "show beams":
    @Condition not isGenerating
    do:
        for nearestNodeToHostIdx in range(len(nodePositions)):
            if distance(hostPlayer.getPosition(), nodePositions[nearestNodeToHostIdx]) <= NODE_RADIUS:
                nodeToShowBeams = nearestNodeToHostIdx
                break
        
        wait(0.5)

    while RULE_CONDITION

rule "place node":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE)
    @Condition not isGenerating
    nodePositions.append(eventPlayer.getPosition())
    nodeConnections[len(nodePositions)-1] = []
    createEffect(hostPlayer, Effect.SPHERE, Color.BLUE, evalOnce(nodePositions.last()), NODE_RADIUS, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    nodeEffects[len(nodePositions)-1] = getLastCreatedEntity()
    updateIwts()

rule "delete node":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE)
    @Condition not isGenerating
    @Condition len(nodePositions) > 0
    #remove connections
    for nodeRemoveIdx in range(len(nodePositions)):
        nodeConnections[nodeRemoveIdx].remove(len(nodePositions)-1)

    del nodeConnections[len(nodePositions)-1]
    nodePositions = nodePositions.slice(0, len(nodePositions)-1)
    destroyEffect(nodeEffects.last())
    nodeEffects = nodeEffects.slice(0, len(nodeEffects)-1)
    destroyInWorldText(nodeTexts.last())
    nodeTexts = nodeTexts.slice(0, len(nodeTexts)-1)
    lastTestedNode--
    lastTestedNode max= 0


rule "update spheres periodically":
    while true:
        updateIwts()
        wait(1)

rule "generate connections":
    @Condition hostPlayer.isHoldingButton(Button.INTERACT)
    @Condition hostPlayer.isHoldingButton(Button.CROUCH)
    moveToTeam(testDummy, hostPlayer.getTeam(), -1)
    isGenerating = true
    lastTestedNode min= len(nodePositions)-1
    for nodeIdx in range(0, len(nodePositions)):
        for neighborNodeIdx in range(0 if nodeIdx > lastTestedNode else lastTestedNode+1, len(nodePositions)):
            if nodeIdx == neighborNodeIdx:
                goto endloop
            if neighborNodeIdx in nodeConnections[nodeIdx]:
                goto endloop

            if distance(nodePositions[nodeIdx], nodePositions[neighborNodeIdx]) < CONNECTION_DISTANCE:
                #First, check if the nodes are in direct line of sight
                if isInLoS(nodePositions[nodeIdx]+vect(0,1.5,0), nodePositions[neighborNodeIdx]+vect(0,1,0), BarrierLos.PASS_THROUGH_BARRIERS):
                    #Check if there is a gap of more than 0.2m. 1m interval is plenty, if there is a gap smaller than that, the bots can easily jump over it
                    for raycastTestIdx in range(0, distance(nodePositions[nodeIdx], nodePositions[neighborNodeIdx]), 1):
                        if isInLoS(nodePositions[nodeIdx]+directionTowards(nodePositions[nodeIdx], nodePositions[neighborNodeIdx])*raycastTestIdx+vect(0,1.5,0), nodePositions[nodeIdx]+directionTowards(nodePositions[nodeIdx], nodePositions[neighborNodeIdx])*raycastTestIdx-vect(0,0.2,0), BarrierLos.PASS_THROUGH_BARRIERS):
                            goto botCheck
                    
                    #There is no gap, so no need to run the bot check, a reinhardt should be able to go between the nodes
                    #Do it for both sides as that shouldn't be a one-way node
                    nodeConnections[nodeIdx].append(neighborNodeIdx)
                    nodeConnections[neighborNodeIdx].append(nodeIdx)
                    wait()
                    goto endloop

                #Else, check if the topmost node has vertical then horizontal LoS.
                elif nodePositions[nodeIdx].y - nodePositions[neighborNodeIdx].y > 1:
                    #check vertical
                    if isInLoS(nodePositions[nodeIdx]+vect(0,1.5,0), vect(nodePositions[neighborNodeIdx].x, nodePositions[nodeIdx].y+1.5, nodePositions[neighborNodeIdx].z), BarrierLos.PASS_THROUGH_BARRIERS):
                        #check horizontal
                        if isInLoS(vect(nodePositions[neighborNodeIdx].x, nodePositions[nodeIdx].y+1.5, nodePositions[neighborNodeIdx].z), nodePositions[neighborNodeIdx]+vect(0,1.5,0), BarrierLos.PASS_THROUGH_BARRIERS):
                            #make the bot have the final say
                            goto botCheck
                
                #Else, do not connect the nodes. If we have the bot check, it will result in bots hugging walls too much.
                goto endloop

                botCheck:
                #Make a reinhardt walk for a more precise check
                smallMessage(hostPlayer, "bot check for node {} and neighbor {}".format(nodeIdx, neighborNodeIdx))
                makeBotWalk = true
                wasOffGround = false
                connectionTestStatus = ConnectionTest.IN_PROGRESS
                waitUntil(connectionTestStatus == ConnectionTest.FAIL or connectionTestStatus == ConnectionTest.SUCCESS, 10)
                if connectionTestStatus == ConnectionTest.SUCCESS:
                    nodeConnections[nodeIdx].append(neighborNodeIdx)
                    /*if not wasOffGround and abs(nodePositions[nodeIdx].y - nodePositions[neighborNodeIdx].y) < 1:
                        #cannot be a one-way node
                        nodeConnections[neighborNodeIdx].append(nodeIdx)*/

                makeBotWalk = false
                wait(0.1)

            endloop:


        wait()
    
    isGenerating = false
    lastTestedNode = len(nodePositions)-1
    
    enableInspector()
    disableInspector()


