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

const opyStringEntities = {
    "copyright": {
        codepoint: 0xA9,
        description: "The copyright sign.",
    },
    "registered": {
        codepoint: 0xAE,
        description: "The registered sign.",
    },
    "macron": {
        codepoint: 0xAF,
        description: "A \"macron\" (overline).",
    },
    "middle_dot": {
        codepoint: 0xB7,
        description: "The middle dot.",
    },
    "zero_width_space": {
        codepoint: 0x200B,
        description: "A zero-width space.",
    },
    "horizontal_bar": {
        codepoint: 0x2015,
        description: "A horizontal bar.",
    },
    "reference_mark": {
        codepoint: 0x203B,
        description: "The reference mark (used in Japanese).",
    },
    "asterism": {
        codepoint: 0x2042,
        description: "An asterism (used in typography).",
    },
    "left_arrow": {
        codepoint: 0x2190,
        description: "A left-pointing arrow.",
    },
    "up_arrow": {
        codepoint: 0x2191,
        description: "An up-pointing arrow.",
    },
    "right_arrow": {
        codepoint: 0x2192,
        description: "A right-pointing arrow.",
    },
    "down_arrow": {
        codepoint: 0x2193,
        description: "A down-pointing arrow.",
    },
    "horizontal_arrow": {
        codepoint: 0x2194,
        description: "An arrow pointing left and right.",
    },
    "vertical_arrow": {
        codepoint: 0x2195,
        description: "An arrow pointing up and down.",
    },
    "top_left_arrow": {
        codepoint: 0x2196,
        description: "An arrow pointing to the top left.",
    },
    "top_right_arrow": {
        codepoint: 0x2197,
        description: "An arrow pointing to the top right.",
    },
    "bottom_right_arrow": {
        codepoint: 0x2198,
        description: "An arrow pointing to the bottom right.",
    },
    "bottom_left_arrow": {
        codepoint: 0x2199,
        description: "An arrow pointing to the bottom left.",
    },
    "right_double_arrow": {
        codepoint: 0x21D2,
        description: "A right-pointing double arrow.",
    },
    "horizontal_double_arrow": {
        codepoint: 0x21D4,
        description: "A double arrow pointing left and right.",
    },
    "infinity": {
        codepoint: 0x221E,
        description: "The infinity symbol.",
    },
    "fullwidth_block": {
        codepoint: 0x2592,
        description: "A fullwidth semi-transparent block (medium shade).",
    },
    "black_square": {
        codepoint: 0x25A0,
        description: "A black square.",
    },
    "white_square": {
        codepoint: 0x25A1,
        description: "A white square.",
    },
    "square_in_square": {
        codepoint: 0x25A3,
        description: "A black square inside a white square.",
    },
    "square_horizontal_lines": {
        codepoint: 0x25A4,
        description: "A square with horizontal lines.",
    },
    "square_vertical_lines": {
        codepoint: 0x25A5,
        description: "A square with vertical lines.",
    },
    "square_grid_lines": {
        codepoint: 0x25A6,
        description: "A square with horizontal and vertical lines.",
    },
    "square_top_left_bottom_right_lines": {
        codepoint: 0x25A7,
        description: "A square with lines going from top left to bottom right.",
    },
    "square_top_right_bottom_left_lines": {
        codepoint: 0x25A8,
        description: "A square with lines going from top right to bottom left.",
    },
    "square_diagonal_lines": {
        codepoint: 0x25A9,
        description: "A square with diagonal lines.",
    },
    "up_black_triangle": {
        codepoint: 0x25B2,
        description: "A black triangle pointing up.",
    },
    "up_white_triangle": {
        codepoint: 0x25B3,
        description: "A white triangle pointing up.",
    },
    "right_black_triangle": {
        codepoint: 0x25B6,
        description: "A black triangle pointing right.",
    },
    "right_white_triangle": {
        codepoint: 0x25B7,
        description: "A white triangle pointing right.",
    },
    "down_black_triangle": {
        codepoint: 0x25BC,
        description: "A black triangle pointing down.",
    },
    "down_white_triangle": {
        codepoint: 0x25BD,
        description: "A white triangle pointing down.",
    },
    "left_black_triangle": {
        codepoint: 0x25C0,
        description: "A black triangle pointing left.",
    },
    "left_white_triangle": {
        codepoint: 0x25C1,
        description: "A white triangle pointing left.",
    },
    "black_diamond": {
        codepoint: 0x25C6,
        description: "A black diamond.",
    },
    "white_diamond": {
        codepoint: 0x25C7,
        description: "A white diamond.",
    },
    "diamond_in_diamond": {
        codepoint: 0x25C8,
        description: "A black diamond inside a white diamond.",
    },
    "white_circle": {
        codepoint: 0x25CB,
        description: "A white circle.",
    },
    "black_circle": {
        codepoint: 0x25CF,
        description: "A black circle.",
    },
    "black_star": {
        codepoint: 0x2605,
        description: "A black star.",
    },
    "white_star": {
        codepoint: 0x2606,
        description: "A white star.",
    },
    "black_phone": {
        codepoint: 0x260E,
        description: "A black phone.",
    },
    "white_phone": {
        codepoint: 0x260F,
        description: "A white phone.",
    },
    "left_hand": {
        codepoint: 0x261C,
        description: "A hand pointing left.",
    },
    "right_hand": {
        codepoint: 0x261E,
        description: "A hand pointing right.",
    },
    "female": {
        codepoint: 0x2640,
        description: "The female sign.",
    },
    "male": {
        codepoint: 0x2642,
        description: "The male sign.",
    },
    "black_spades": {
        codepoint: 0x2660,
        description: "The black 'spades' icon.",
    },
    "white_heart": {
        codepoint: 0x2661,
        description: "A white heart.",
    },
    "black_clubs": {
        codepoint: 0x2663,
        description: "The black 'clubs' icon.",
    },
    "white_spades": {
        codepoint: 0x2664,
        description: "The white 'spades' icon.",
    },
    "black_heart": {
        codepoint: 0x2665,
        description: "A black heart.",
    },
    "white_clubs": {
        codepoint: 0x2667,
        description: "The white 'clubs' icon.",
    },
    "java": {
        codepoint: 0x2668,
        description: "The java icon.",
    },
    "quarter_note": {
        codepoint: 0x2669,
        description: "A quarter music note.",
    },
    "eighth_note": {
        codepoint: 0x266A,
        description: "An eighth music note.",
    },
    "sixteenth_double_note": {
        codepoint: 0x266C,
        description: "Two sixteenth music notes.",
    },
    "flat_note": {
        codepoint: 0x266D,
        description: "A flat music note.",
    },
    "fullwidth_space": {
        codepoint: 0x3000,
        description: "A fullwidth space.",
    },
    "industrial_symbol": {
        codepoint: 0x3004,
        description: "The Japanese industrial standard symbol.",
    },
    "postal_face": {
        codepoint: 0x3020,
        description: "The postal mark face.",
    },
    "box_with_x": {
        codepoint: 0x303F,
        description: "A box containing an X.",
    },
}