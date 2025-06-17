import { Anchor, Orientation, Types, UI } from "jsonui-scripting";

export class CommonScroll {

    // static scroll_viewport = UI.extend<Types.Panel, string>(
    //     "common.scroll_background_and_viewport",
    //     {
    //         size: ["fill", "100%"],
    //     }
    // ).addChild(
    //     UI.stackPanel({
    //         layer: 1,
    //         size: ["100%", "100%"],
    //     }).addChild("$scrolling_content", {
    //         layer: 1,
    //         anchor_from: Anchor.TopMiddle,
    //         anchor_to: Anchor.TopMiddle,
    //     }, "scrolling_content"),
    // {}, "scrolling_view_port");

    // static scrollBarAndTrack = UI.extend<Types.Panel, string>(
    //     "common.scroll_bar_and_track",
    //     {

    //     },
    // )

    static scrollBox = UI.image({
        texture: ".endd/scroll_box",
        size: "$scroll_box_size",
        layer: 4,
        alpha: 0.5,
    });

    static scrollingPanel = UI.extend("common.scrolling_panel", {
        "$scroll_view_control_size": ["100%", "100%"],
        "$scroll_view_stack_panel_size": ["100%", "100%"],
        "$view_port_size": ["fill", "100%"],

        "$always_handle_scrolling": true,
        // "$jump_to_bottom_on_update": true,

        "$scroll_background_image_control": "common.empty_panel",

        "$scroll_view_port_offset": [0, 0],
        "$scroll_view_port_size": ["100%", "100%"],
        "$scroll_view_port_max_size": ["100%", "100%"],

        "$scroll_bar_and_track_size": ["100%c + 2px", "100%"],
        "$scroll_bar_left_padding_size": [0, 0],
        "$scroll_bar_right_padding_size": [0, 0],

        "$scroll_size": [10, "100%"],
        "$scroll_track_anchor": Anchor.Center,
        "$scroll_track_offset": [0, 0],

        "$scroll_box_visible": true,
        "$scroll_track_image_control": UI.image({
            texture: ".endd/scroll_track",
            size: [10, "100%"],
            layer: 3,
            alpha: 0.5,
        }).getPath(),
        "$scroll_box_mouse_image_control": this.scrollBox.getPath(),
        "$scroll_box_touch_image_control": this.scrollBox.getPath(),
        "$scroll_box_size": [6, "100% - 4px"]
    })
        .addChild(
            UI.extend<Types.InputPanel, string>(
                "common.scrolling_panel_base",
                {
                    size: ["100%", "100%"],
                }
            )
                // .addChild(
                //     UI.extend<Types.ScrollView, string>(
                //         "common.scroll_view_control",
                //         {
                //             size: ["100%", "100%"],
                //         }
                //     ).addChild(
                //             UI.stackPanel({
                //                 orientation: Orientation.Horizontal,
                //                 size: ["100%", "100%"],
                //             })
                //                 .addChild(this.scroll_viewport,
                //                 {}, "background_and_viewport")
                //                 .addChild(this.scrollBarAndTrack,
                //                 {},"bar_and_track"),
                //         ),
                //     {},"scroll_view"),
        );
}