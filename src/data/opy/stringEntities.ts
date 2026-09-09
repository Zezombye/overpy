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

export const opyStringEntities: Record<string, {
    codepoint: number,
    description: import("../../types").LocalizableString
}> = {
    "copyright": {
        codepoint: 0xA9,
        description: { "en-US": "The copyright sign." },
    },
    "registered": {
        codepoint: 0xAE,
        description: { "en-US": "The registered sign." },
    },
    "macron": {
        codepoint: 0xAF,
        description: { "en-US": "A \"macron\" (overline)." },
    },
    "middle_dot": {
        codepoint: 0xB7,
        description: { "en-US": "The middle dot." },
    },
    "zero_width_space": {
        codepoint: 0x00AD,
        description: { "en-US": "A zero-width space." },
    },
    "horizontal_bar": {
        codepoint: 0x2015,
        description: { "en-US": "A horizontal bar." },
    },
    "reference_mark": {
        codepoint: 0x203B,
        description: { "en-US": "The reference mark (used in Japanese)." },
    },
    "asterism": {
        codepoint: 0x2042,
        description: { "en-US": "An asterism (used in typography)." },
    },
    "left_arrow": {
        codepoint: 0x2190,
        description: { "en-US": "A left-pointing arrow." },
    },
    "up_arrow": {
        codepoint: 0x2191,
        description: { "en-US": "An up-pointing arrow." },
    },
    "right_arrow": {
        codepoint: 0x2192,
        description: { "en-US": "A right-pointing arrow." },
    },
    "down_arrow": {
        codepoint: 0x2193,
        description: { "en-US": "A down-pointing arrow." },
    },
    "horizontal_arrow": {
        codepoint: 0x2194,
        description: { "en-US": "An arrow pointing left and right." },
    },
    "vertical_arrow": {
        codepoint: 0x2195,
        description: { "en-US": "An arrow pointing up and down." },
    },
    "top_left_arrow": {
        codepoint: 0x2196,
        description: { "en-US": "An arrow pointing to the top left." },
    },
    "top_right_arrow": {
        codepoint: 0x2197,
        description: { "en-US": "An arrow pointing to the top right." },
    },
    "bottom_right_arrow": {
        codepoint: 0x2198,
        description: { "en-US": "An arrow pointing to the bottom right." },
    },
    "bottom_left_arrow": {
        codepoint: 0x2199,
        description: { "en-US": "An arrow pointing to the bottom left." },
    },
    "right_double_arrow": {
        codepoint: 0x21D2,
        description: { "en-US": "A right-pointing double arrow." },
    },
    "horizontal_double_arrow": {
        codepoint: 0x21D4,
        description: { "en-US": "A double arrow pointing left and right." },
    },
    "infinity": {
        codepoint: 0x221E,
        description: { "en-US": "The infinity symbol." },
    },
    "fullwidth_block": {
        codepoint: 0x2592,
        description: { "en-US": "A fullwidth semi-transparent block (medium shade)." },
    },
    "black_square": {
        codepoint: 0x25A0,
        description: { "en-US": "A black square." },
    },
    "white_square": {
        codepoint: 0x25A1,
        description: { "en-US": "A white square." },
    },
    "square_in_square": {
        codepoint: 0x25A3,
        description: { "en-US": "A black square inside a white square." },
    },
    "square_horizontal_lines": {
        codepoint: 0x25A4,
        description: { "en-US": "A square with horizontal lines." },
    },
    "square_vertical_lines": {
        codepoint: 0x25A5,
        description: { "en-US": "A square with vertical lines." },
    },
    "square_grid_lines": {
        codepoint: 0x25A6,
        description: { "en-US": "A square with horizontal and vertical lines." },
    },
    "square_top_left_bottom_right_lines": {
        codepoint: 0x25A7,
        description: { "en-US": "A square with lines going from top left to bottom right." },
    },
    "square_top_right_bottom_left_lines": {
        codepoint: 0x25A8,
        description: { "en-US": "A square with lines going from top right to bottom left." },
    },
    "square_diagonal_lines": {
        codepoint: 0x25A9,
        description: { "en-US": "A square with diagonal lines." },
    },
    "up_black_triangle": {
        codepoint: 0x25B2,
        description: { "en-US": "A black triangle pointing up." },
    },
    "up_white_triangle": {
        codepoint: 0x25B3,
        description: { "en-US": "A white triangle pointing up." },
    },
    "right_black_triangle": {
        codepoint: 0x25B6,
        description: { "en-US": "A black triangle pointing right." },
    },
    "right_white_triangle": {
        codepoint: 0x25B7,
        description: { "en-US": "A white triangle pointing right." },
    },
    "down_black_triangle": {
        codepoint: 0x25BC,
        description: { "en-US": "A black triangle pointing down." },
    },
    "down_white_triangle": {
        codepoint: 0x25BD,
        description: { "en-US": "A white triangle pointing down." },
    },
    "left_black_triangle": {
        codepoint: 0x25C0,
        description: { "en-US": "A black triangle pointing left." },
    },
    "left_white_triangle": {
        codepoint: 0x25C1,
        description: { "en-US": "A white triangle pointing left." },
    },
    "black_diamond": {
        codepoint: 0x25C6,
        description: { "en-US": "A black diamond." },
    },
    "white_diamond": {
        codepoint: 0x25C7,
        description: { "en-US": "A white diamond." },
    },
    "diamond_in_diamond": {
        codepoint: 0x25C8,
        description: { "en-US": "A black diamond inside a white diamond." },
    },
    "white_circle": {
        codepoint: 0x25CB,
        description: { "en-US": "A white circle." },
    },
    "black_circle": {
        codepoint: 0x25CF,
        description: { "en-US": "A black circle." },
    },
    "black_star": {
        codepoint: 0x2605,
        description: { "en-US": "A black star." },
    },
    "white_star": {
        codepoint: 0x2606,
        description: { "en-US": "A white star." },
    },
    "black_phone": {
        codepoint: 0x260E,
        description: { "en-US": "A black phone." },
    },
    "white_phone": {
        codepoint: 0x260F,
        description: { "en-US": "A white phone." },
    },
    "left_hand": {
        codepoint: 0x261C,
        description: { "en-US": "A hand pointing left." },
    },
    "right_hand": {
        codepoint: 0x261E,
        description: { "en-US": "A hand pointing right." },
    },
    "female": {
        codepoint: 0x2640,
        description: { "en-US": "The female sign." },
    },
    "male": {
        codepoint: 0x2642,
        description: { "en-US": "The male sign." },
    },
    "black_spades": {
        codepoint: 0x2660,
        description: { "en-US": "The black 'spades' icon." },
    },
    "white_heart": {
        codepoint: 0x2661,
        description: { "en-US": "A white heart." },
    },
    "black_clubs": {
        codepoint: 0x2663,
        description: { "en-US": "The black 'clubs' icon." },
    },
    "white_spades": {
        codepoint: 0x2664,
        description: { "en-US": "The white 'spades' icon." },
    },
    "black_heart": {
        codepoint: 0x2665,
        description: { "en-US": "A black heart." },
    },
    "white_clubs": {
        codepoint: 0x2667,
        description: { "en-US": "The white 'clubs' icon." },
    },
    "java": {
        codepoint: 0x2668,
        description: { "en-US": "The java icon." },
    },
    "quarter_note": {
        codepoint: 0x2669,
        description: { "en-US": "A quarter music note." },
    },
    "eighth_note": {
        codepoint: 0x266A,
        description: { "en-US": "An eighth music note." },
    },
    "sixteenth_double_note": {
        codepoint: 0x266C,
        description: { "en-US": "Two sixteenth music notes." },
    },
    "flat_note": {
        codepoint: 0x266D,
        description: { "en-US": "A flat music note." },
    },
    "fullwidth_space": {
        codepoint: 0x3000,
        description: { "en-US": "A fullwidth space." },
    },
    "industrial_symbol": {
        codepoint: 0x3004,
        description: { "en-US": "The Japanese industrial standard symbol." },
    },
    "postal_face": {
        codepoint: 0x3020,
        description: { "en-US": "The postal mark face." },
    },
    "box_with_x": {
        codepoint: 0x303F,
        description: { "en-US": "A box containing an X." },
    },
};
