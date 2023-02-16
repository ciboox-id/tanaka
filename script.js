(function(){
    var script = {
 "defaultVRPointer": "laser",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_3CE3831C_2B63_600A_41A8_6321214B5F79",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "verticalAlign": "top",
 "overflow": "visible",
 "class": "Player",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "borderSize": 0,
 "definitions": [{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_836FE6A0_A5EA_694A_41D3_09F844F5C122",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_camera"
},
{
 "thumbnailUrl": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_t.jpg",
 "partial": false,
 "label": "Jembatan Kayu",
 "id": "panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BBCB6F49_A153_64D8_41E0_4F8F1D0EDB27",
  "this.overlay_B701E23A_A152_9CB8_41DA_B13DC047048F",
  "this.overlay_A0F645D4_B0E7_E311_41E1_37386B13FD90"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_t.jpg",
 "partial": false,
 "label": "Check Point 2",
 "id": "panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1",
   "backwardYaw": -170.18,
   "yaw": -179.79,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050",
   "backwardYaw": 2.44,
   "yaw": 12.03,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B86FF44F_A155_64D8_41D8_925C55B7056E",
  "this.overlay_B8C7F1D9_A155_7FF8_41E2_0BB668FF30D7",
  "this.overlay_B3CCBDC7_AA3A_E296_41DF_B64FF2623C3D"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -88.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_42DE6E47_54C0_FC75_41B5_E8FE822171EF"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A08480E7_B0E3_613F_41E4_4B77E4F445E2",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Kolam Utama",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A0B8B0E5_B0E3_6133_41E1_A60FF13F218E"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "items": [
  {
   "media": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "camera": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "camera": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "camera": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 4)",
   "camera": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 4, 5)",
   "camera": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 5, 6)",
   "camera": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 6, 7)",
   "camera": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 7, 8)",
   "camera": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 8, 9)",
   "camera": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 9, 10)",
   "camera": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 10, 11)",
   "camera": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 11, 12)",
   "camera": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 12, 13)",
   "camera": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 13, 14)",
   "camera": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 14, 15)",
   "camera": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 15, 16)",
   "camera": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 16, 17)",
   "camera": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 17, 18)",
   "camera": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 18, 19)",
   "camera": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 19, 20)",
   "camera": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 20, 21)",
   "camera": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 21, 22)",
   "camera": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 22, 23)",
   "camera": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 23, 24)",
   "camera": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 24, 25)",
   "camera": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 25, 26)",
   "camera": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 26, 27)",
   "camera": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 27, 0)",
   "camera": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 2.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41D54D56_54C0_FC17_41BD_5037EFF7C239"
},
{
 "shadowBlurRadius": 6,
 "id": "window_BF100482_B0E6_E1F1_41DF_9C5078C2ABC4",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Kantin Atas",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BF0C3481_B0E6_E1F3_41DC_2468601E1886"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 110.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4231FEA0_54C0_FC2B_41C5_2E9C6EDD7A61"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 8.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_422DCE5F_54C0_FC15_41C8_F21EE3ACD461"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A0DC08EC_B0E6_A131_41D4_053ACA78FE85",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Gazebo Sawah",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A0D818EB_B0E6_A137_41E5_525CA14E1D35"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_t.jpg",
 "partial": false,
 "label": "Check Point 3",
 "id": "panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A",
   "backwardYaw": -162.65,
   "yaw": -15.75,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F",
   "backwardYaw": -179.79,
   "yaw": -170.18,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B9C57643_A155_A4C9_41C6_CEED6AF8BAA0",
  "this.overlay_B87AD3B2_A155_9C4B_41E1_EEB0BD309C5D"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_t.jpg",
 "partial": false,
 "label": "Pintu Karcis",
 "id": "panorama_B1643AC8_A093_E927_41C3_DF05BED144E3",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428",
   "backwardYaw": -171.76,
   "yaw": -179.79,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050",
   "backwardYaw": -170.53,
   "yaw": -4.77,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B89D9ED4_A152_A5C8_41D8_FBEA1289B41F",
  "this.overlay_B7CE42D2_A152_BDCB_41E1_15633064FAB5",
  "this.overlay_A023DC65_B0E1_6133_41CF_342FDEFD6438"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -156.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41185D90_54C0_FCEB_41D0_1576D6FCD692"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41F92D33_54C0_FC2D_4199_11BB24CD0046"
},
{
 "shadowBlurRadius": 6,
 "id": "window_B286FBD5_AA6D_E68A_41C9_4B4B86AC25F4",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "PENARIKAN KARCIS",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_B2852BD6_AA6D_E6B6_41D8_32781579C70A"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_B13B8D87_AA2E_6296_41E3_65C391868A42",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "SPOT DUDUK",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_B1379D86_AA2E_6296_41D6_DF1740135104"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "items": [
  {
   "media": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0)",
   "camera": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_t.jpg",
 "partial": false,
 "label": "Spot Bermain",
 "id": "panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20",
   "backwardYaw": -75.81,
   "yaw": 144.51,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B9091E9B_A155_A479_41D9_90929F14ADFB",
  "this.overlay_A0438F5E_B0EF_7F0E_41D7_76E2FE8662B8",
  "this.overlay_A52EB546_BF23_6581_41C8_C2E7AE1C523A"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4298BDFD_54C0_FC15_41D2_AB0B7889B7DE"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -168.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_42890DF1_54C0_FC2D_41AD_93B536E4C524"
},
{
 "thumbnailUrl": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_t.jpg",
 "partial": false,
 "label": "Kolam Ikan",
 "id": "panorama_B162A118_A090_FB26_41D6_F8033AC432FF",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B9578249_A15F_9CD8_41D3_69B6F0DA2A69",
  "this.overlay_B84BF3FB_A15F_A3B8_41E0_6E389566763C",
  "this.overlay_A0AA850B_B0E2_E0F7_41D5_D2492EC5CC5F"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_t.jpg",
 "partial": false,
 "label": "Check Point 1",
 "id": "panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3",
   "backwardYaw": -4.77,
   "yaw": -170.53,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F",
   "backwardYaw": 12.03,
   "yaw": 2.44,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B7EF3B7A_A156_ACBB_41DA_65FE74164650",
  "this.overlay_B9AE6CA6_A156_E44B_41BA_E6CC864C3BE5"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_BF7998FB_B0E1_A117_41E2_B3EC9A830FD9",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Gazebo Kantin",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BF75E8FA_B0E1_A111_41E4_F0914509F949"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_A074F23D_B0EF_A113_41DE_53C41827CD02",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Ikonik Air Terjun",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A068E23B_B0EF_A117_41C1_7C090C1E9030"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_t.jpg",
 "partial": false,
 "label": "Lokasi Gerbang",
 "id": "panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3",
   "backwardYaw": -179.79,
   "yaw": -171.76,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341",
   "backwardYaw": 169.77,
   "yaw": 78.54,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B874BA91_A15E_AC49_41D2_1461C2F33830",
  "this.overlay_BF0664E5_AA6A_A28A_41A5_23158186E783",
  "this.overlay_BF54552C_B0E2_E331_41D1_9644EC8984E2"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_B0AF1390_AA3A_A68A_41C6_089480A52477",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Taman beringin",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_B093238E_AA3A_A696_41B0_6207A353409C"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "data": {
  "label": "gabung_audio"
 },
 "class": "MediaAudio",
 "autoplay": true,
 "id": "audio_33CAF19C_2B63_E00A_41BC_E9D53AF3B21C",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_33CAF19C_2B63_E00A_41BC_E9D53AF3B21C.mp3",
  "oggUrl": "media/audio_33CAF19C_2B63_E00A_41BC_E9D53AF3B21C.ogg"
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -101.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41708DB5_54C0_FC15_4182_78E9FC115775"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_camera"
},
{
 "thumbnailUrl": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_t.jpg",
 "partial": false,
 "label": "Spot Atas",
 "id": "panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B79B3426_A153_6448_41E3_A8BBCE567D69",
  "this.overlay_A05C3369_B0EE_A733_41CA_C40E897F3F1E"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -172.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41928D1A_54C0_FC1F_41A1_F536BA299C2D"
},
{
 "thumbnailUrl": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_t.jpg",
 "partial": false,
 "label": "Parkir Mobil",
 "id": "panorama_B11D279A_A090_275B_417B_FC2CAC819341",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428",
   "backwardYaw": 78.54,
   "yaw": 169.77,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BFEDF050_AA7A_A18A_41BF_EC15AE22CA91",
  "this.overlay_A02571DB_B0E1_E317_41D2_677BCED75A32"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_t.jpg",
 "partial": false,
 "label": "Lorong Penghubung 1",
 "id": "panorama_B1451597_A090_5B29_41B5_2F257A69E24C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664",
   "backwardYaw": -177.39,
   "yaw": 1.75,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B90D259B_A15D_E479_41A7_3FE5A44CC7E3",
  "this.overlay_B78DA886_A15D_EC48_41DE_89D06434EC62",
  "this.overlay_47F47BF2_54C0_A42F_41B1_C98AC24B7CA2"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1029285_A090_7929_41E2_C89A52DA3664_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -167.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_413C3D6E_54C0_FC37_41C2_A869B1A4A5C1"
},
{
 "shadowBlurRadius": 6,
 "id": "window_BF42E500_B0E2_E0F1_41BD_41267071D17A",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Pintu masuk",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BF7FA4FE_B0E2_E111_41E1_25573E35EE3F"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_t.jpg",
 "partial": false,
 "label": "Lorong Jepang",
 "id": "panorama_B1029285_A090_7929_41E2_C89A52DA3664",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C",
   "backwardYaw": 1.75,
   "yaw": -177.39,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407",
   "backwardYaw": -94.68,
   "yaw": 7.24,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B879A609_A15D_A458_41D6_59B7C3648E32",
  "this.overlay_BBC9E977_A15D_ACC8_41E2_648D262620F8",
  "this.overlay_A0BBA45D_B0E3_A113_41CC_33E0F34803F6"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_B3BC7D9F_AA3A_E2B6_41E4_5AA62ACD9ED8",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "PENARIKAN KARCIS",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_B3A7ED9F_AA3A_E2B6_41E0_6848C20B8A6F"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B135E99D_A097_EB59_41D2_249722990E6A_camera"
},
{
 "thumbnailUrl": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_t.jpg",
 "partial": false,
 "label": "Gazebo Sawah",
 "id": "panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_A0AE8913_B0E6_A316_41DE_26DBC70D210A",
  "this.overlay_B0AF2563_BF23_6587_41E0_7CA7C7B1679A"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 107.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_42ABBDD9_54C0_FC1D_41CD_929401725D69"
},
{
 "items": [
  {
   "media": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
   "camera": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
   "camera": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3)",
   "camera": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 4)",
   "camera": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 4, 5)",
   "camera": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 5, 6)",
   "camera": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 6, 7)",
   "camera": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 7, 8)",
   "camera": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 8, 9)",
   "camera": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 9, 10)",
   "camera": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 10, 11)",
   "camera": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 11, 12)",
   "camera": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 12, 13)",
   "camera": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 13, 14)",
   "camera": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 14, 15)",
   "camera": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 15, 16)",
   "camera": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 16, 17)",
   "camera": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 17, 18)",
   "camera": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 18, 19)",
   "camera": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 19, 20)",
   "camera": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 20, 21)",
   "camera": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 21, 22)",
   "camera": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 22, 23)",
   "camera": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 23, 24)",
   "camera": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 24, 25)",
   "camera": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 25, 26)",
   "camera": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 26, 27)",
   "camera": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 27, 0)",
   "camera": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "class": "PlayList"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A0709F3A_B0EF_7F11_41D1_165EA23432C4",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Area Bermain",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A074AF39_B0EF_7F13_41E4_DF8C6B3CEA2D"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "data": {
  "label": "eng_tanaka"
 },
 "class": "MediaAudio",
 "autoplay": true,
 "id": "audio_4B86E029_448A_66CC_41B0_7144E825DB5E",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_4B86E029_448A_66CC_41B0_7144E825DB5E.mp3",
  "oggUrl": "media/audio_4B86E029_448A_66CC_41B0_7144E825DB5E.ogg"
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_camera"
},
{
 "id": "ImageResource_836F86A0_A5EA_694A_41DE_2F8C4189B9FF",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_8129AB01_A5EA_DF4A_41CE_0FE04380ADEA_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/zoomImage_8129AB01_A5EA_DF4A_41CE_0FE04380ADEA_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/zoomImage_8129AB01_A5EA_DF4A_41CE_0FE04380ADEA_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/zoomImage_8129AB01_A5EA_DF4A_41CE_0FE04380ADEA_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_camera"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A05331B3_B0E1_E317_41BA_00B13EFE7564",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Parkir Mobil",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A05721B2_B0E1_E311_41D0_09FD4BD37D06"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -36.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41613DA8_54C0_FC3C_41D3_E623836596DB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1451597_A090_5B29_41B5_2F257A69E24C_camera"
},
{
 "items": [
  {
   "media": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "camera": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "camera": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 3)",
   "camera": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 3, 4)",
   "camera": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 4, 5)",
   "camera": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 5, 6)",
   "camera": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 6, 7)",
   "camera": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 7, 8)",
   "camera": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 8, 9)",
   "camera": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 9, 10)",
   "camera": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 10, 11)",
   "camera": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 11, 12)",
   "camera": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 12, 13)",
   "camera": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 13, 14)",
   "camera": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 14, 15)",
   "camera": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 15, 16)",
   "camera": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 16, 17)",
   "camera": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 17, 18)",
   "camera": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 18, 19)",
   "camera": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 19, 20)",
   "camera": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 20, 21)",
   "camera": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 21, 22)",
   "camera": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 22, 23)",
   "camera": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 23, 24)",
   "camera": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 24, 25)",
   "camera": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 25, 26)",
   "camera": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 26, 27)",
   "camera": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 27, 0)",
   "camera": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "class": "PlayList"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A0AAB438_B0E3_A111_41E4_254B89DC7EAE",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Lorong Jepang",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A0AEA437_B0E3_A11F_41D8_946B72BAED91"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B131A77A_A090_27DA_41B8_67399ED091A6_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_camera"
},
{
 "thumbnailUrl": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_t.jpg",
 "partial": false,
 "label": "Cek Karcis",
 "id": "panorama_B135E99D_A097_EB59_41D2_249722990E6A",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0",
   "backwardYaw": -72.45,
   "yaw": 23.35,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1",
   "backwardYaw": -15.75,
   "yaw": -162.65,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B7DA9DDB_A157_E7F9_41DF_7CB436FE9B70",
  "this.overlay_BD86A3F6_AA6A_A676_41D5_A52960B8C652",
  "this.overlay_B264EB78_AA6E_A67B_41C0_B9041C5C1BE7"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_camera"
},
{
 "items": [
  {
   "media": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1)",
   "camera": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2)",
   "camera": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 3)",
   "camera": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 3, 4)",
   "camera": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 4, 5)",
   "camera": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 5, 6)",
   "camera": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 6, 7)",
   "camera": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 7, 8)",
   "camera": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 8, 9)",
   "camera": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 9, 10)",
   "camera": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 10, 11)",
   "camera": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 11, 12)",
   "camera": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 12, 13)",
   "camera": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 13, 14)",
   "camera": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 14, 15)",
   "camera": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 15, 16)",
   "camera": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 16, 17)",
   "camera": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 17, 18)",
   "camera": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 18, 19)",
   "camera": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 19, 20)",
   "camera": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 20, 21)",
   "camera": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 21, 22)",
   "camera": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 22, 23)",
   "camera": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 23, 24)",
   "camera": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 24, 25)",
   "camera": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 25, 26)",
   "camera": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 26, 27)",
   "camera": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 27, 0)",
   "camera": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_t.jpg",
 "partial": false,
 "label": "Gazebo Ikan",
 "id": "panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B73F5AFF_A155_ADB9_417A_FCEBAEF2864C",
  "this.overlay_BF514780_B0E1_6FF1_41E1_B319E3771079"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_t.jpg",
 "partial": false,
 "label": "Jembatan Baru",
 "id": "panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664"
  },
  {
   "panorama": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862",
   "backwardYaw": 144.51,
   "yaw": -75.81,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BB11A94B_A153_ACD9_41E2_9E4807E27DBE",
  "this.overlay_B9CBB077_A153_BCC8_41DD_C17963E4DA2A",
  "this.overlay_A0BB391F_B0E7_630F_41AF_195C90622CF2"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_A6CFF502_BF23_6581_41E0_D4F7E4FBF9F3",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Spot Pintu Jepang",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A5354509_BF23_6583_41E0_C6D485F00BAB"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_t.jpg",
 "partial": false,
 "label": "Kantin Atas Barat",
 "id": "panorama_B132F532_A090_5B6B_41DB_ED0A8832405F",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B711173B_A15D_A4B9_41D4_D126D5D4DC7F",
  "this.overlay_B94415A2_A15E_E44B_41E3_3D19040FADAF",
  "this.overlay_A0E134A7_B0E6_E13F_41D7_B2E6870421E8"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B162A118_A090_FB26_41D6_F8033AC432FF_camera"
},
{
 "items": [
  {
   "media": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1)",
   "camera": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2)",
   "camera": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 3)",
   "camera": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 3, 4)",
   "camera": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 4, 5)",
   "camera": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 5, 6)",
   "camera": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 6, 7)",
   "camera": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 7, 8)",
   "camera": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 8, 9)",
   "camera": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 9, 10)",
   "camera": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 10, 11)",
   "camera": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 11, 12)",
   "camera": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 12, 13)",
   "camera": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 13, 0)",
   "camera": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "class": "PlayList"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A0E7AD8E_B0E7_A3F1_41DE_5997E5612A03",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Jembatan Pring",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A0E3BD8D_B0E7_A3F2_41DC_E44640B3B436"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4146EDC1_54C0_FC6D_41D4_A38BCE7C279D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B11D279A_A090_275B_417B_FC2CAC819341_camera"
},
{
 "thumbnailUrl": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_t.jpg",
 "partial": false,
 "label": "Waterfall 2",
 "id": "panorama_B14D22F5_A090_DEE9_41E3_79352DF85407",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664",
   "backwardYaw": 7.24,
   "yaw": -94.68,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B78AB2A5_A156_9C49_41CE_704DB84F22FF",
  "this.overlay_A0470264_B0EF_A131_41C5_FE1E4C1BED92",
  "this.overlay_A5DE5C6D_BF2F_6B83_41C6_0108505C86EF"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_836F96A0_A5EA_694A_41D3_CA4B35C5059A",
 "class": "FadeInEffect"
},
{
 "thumbnailUrl": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_t.jpg",
 "partial": false,
 "label": "Kolam Utama",
 "id": "panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52",
   "backwardYaw": 11.84,
   "yaw": 143.49,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B6F5A649_AA2A_A19A_41D2_5CE6E32AB766",
  "this.overlay_A08B710D_B0E3_60F3_41CF_FCC060B67E82"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_42FECE14_54C0_FFEB_41C3_287050F004FF"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 104.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41C16D4A_54C0_FC7F_41CE_FDE0EC981DEB"
},
{
 "items": [
  {
   "media": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1)",
   "camera": "this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
   "camera": "this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3)",
   "camera": "this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4)",
   "camera": "this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5)",
   "camera": "this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 6)",
   "camera": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 6, 7)",
   "camera": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 7, 8)",
   "camera": "this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 8, 9)",
   "camera": "this.panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 9, 10)",
   "camera": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 10, 11)",
   "camera": "this.panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 11, 12)",
   "camera": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 12, 13)",
   "camera": "this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 13, 14)",
   "camera": "this.panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 14, 15)",
   "camera": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 15, 16)",
   "camera": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 16, 17)",
   "camera": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 17, 18)",
   "camera": "this.panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 18, 19)",
   "camera": "this.panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 19, 20)",
   "camera": "this.panorama_B162A118_A090_FB26_41D6_F8033AC432FF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 20, 21)",
   "camera": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 21, 22)",
   "camera": "this.panorama_B1029285_A090_7929_41E2_C89A52DA3664_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 22, 23)",
   "camera": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 23, 24)",
   "camera": "this.panorama_B11D279A_A090_275B_417B_FC2CAC819341_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 24, 25)",
   "camera": "this.panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 25, 26)",
   "camera": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 26, 27)",
   "camera": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 27, 0)",
   "camera": "this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 164.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_42BB1DE5_54C0_FC35_41C1_18843F47668A"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41280D62_54C0_FC2F_419C_462CD4F3357E"
},
{
 "shadowBlurRadius": 6,
 "id": "window_BF03C3FD_B0E7_6713_41E2_57D977CA22F4",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Waterfall Tanaka ",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BF3FF3FC_B0E7_6711_41E3_DF28E56705F5"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_40C4CB6F_54C0_A435_41B2_7863238EF8CD",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Kolam Ikan Koi",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_40D93B75_54C0_A415_41CE_FB5EDA7B47F7"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B109C636_A090_596B_41DD_82A94DB14D53_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -74.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_42CE4E20_54C0_FC2B_41CE_F7B0FB77CFE9"
},
{
 "thumbnailUrl": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_t.jpg",
 "partial": false,
 "label": "Aula Beringin dan Parkir Motor",
 "id": "panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B135E99D_A097_EB59_41D2_249722990E6A",
   "backwardYaw": 23.35,
   "yaw": -72.45,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C"
  },
  {
   "panorama": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A",
   "backwardYaw": -1.53,
   "yaw": 105.67,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_AA161F44_A490_B14A_41D7_C019355BE4AF",
  "this.overlay_B6F8F0D1_A493_8F4B_41E3_2B06D35254E8",
  "this.overlay_B0B693B7_AA3A_A6F6_41E2_D79FB7CECE13",
  "this.overlay_A8C16868_B9ED_6DE2_41CB_D4DA0CD259E2",
  "this.overlay_A809B07E_B9E5_7DDE_41C2_2C1272854ECC"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_BF3A4EBE_B0E6_A111_41C2_A3202553F5A5",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Waterfall Baru",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BF365EBC_B0E6_A111_41D8_02575AA9162A"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 17.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41308D79_54C0_FC1D_41B9_908699AFAC52"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A0D4BE03_B0E1_E0F7_41DC_5CA8F476E373",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Kolam Waterfall Baru",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A0C8AE02_B0E1_E0F1_41D6_155B8361ED5E"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_A069C72B_B0EF_EF37_41D8_B9C4CF5222BE",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Kantin",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A06DD72A_B0EF_EF31_419F_B6A91BEB1AA3"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_t.jpg",
 "partial": false,
 "label": "Jembatan Utama Tengah",
 "id": "panorama_B1309181_A090_3B26_41AC_15016D0BDF2A",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0",
   "backwardYaw": 105.67,
   "yaw": -1.53,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53",
   "backwardYaw": 91.12,
   "yaw": -166.75,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B690492F_A15D_6C58_41CC_3BE6C658FF8C",
  "this.overlay_B95DC9FA_A15D_6FBB_41E3_A76E501F1258",
  "this.overlay_BF0E2424_B0E7_6131_41B6_856CC8AA4732"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 13.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_42016EB9_54C0_FC1D_41AA_89E7566E5459"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -35.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_419E9D0F_54C0_FDF5_41B2_264492A80F37"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41137D9D_54C0_FC15_41CD_67EC62D1F16C"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41E68D26_54C0_FC37_41D3_9B0D4B114323"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4222AE80_54C0_FCEB_41AF_C7C247E14308"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A04B2340_B0EE_A771_41C4_97D3C6941147",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Jembatan Kayu",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A04F333F_B0EE_A70F_41E0_C27CBBE9C66E"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_camera"
},
{
 "thumbnailUrl": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_t.jpg",
 "partial": false,
 "label": "Jembatan Utama",
 "id": "panorama_B109C636_A090_596B_41DD_82A94DB14D53",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5",
   "backwardYaw": -69.98,
   "yaw": -106.49,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A",
   "backwardYaw": -166.75,
   "yaw": 91.12,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BF049EE6_B0E6_A131_41E0_C4B7B77E76AD",
  "this.overlay_A92730ED_BF23_7C83_41E5_99F2EB8F64C4",
  "this.overlay_A97A21B9_BF25_5C83_41E0_DE2867D2BE8C"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41558DCD_54C0_FC75_41C5_5CB614D8DC29"
},
{
 "thumbnailUrl": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_t.jpg",
 "partial": false,
 "label": "Spot Menuju Waterfall",
 "id": "panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0"
  },
  {
   "panorama": "this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4",
   "backwardYaw": 143.49,
   "yaw": 11.84,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B6CFB44C_A156_A4D8_41D9_80A7F489D345",
  "this.overlay_B1E13284_AA2D_A68A_41DA_27B3817B844C",
  "this.overlay_B1299DAD_AA2E_629A_41BA_314F6109137B"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_B0F6BC65_BF25_6B83_41E2_741C6A5B7ACB",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Spot Gazebo Utama",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_B0CBEC7D_BF25_6B83_41C8_591851F2E1D6"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_t.jpg",
 "partial": false,
 "label": "Gazebo Utama",
 "id": "panorama_B131A77A_A090_27DA_41B8_67399ED091A6",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862"
  },
  {
   "panorama": "this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B",
   "backwardYaw": -5.8,
   "yaw": -80.27,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B922FD4C_A152_E4D8_41E1_B56D59D93401",
  "this.overlay_B7CE243B_A152_A4B8_41D1_7516CD230B02",
  "this.overlay_B0DB9CAD_BF25_6483_41C3_FEE6E82D7B66"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_camera"
},
{
 "thumbnailUrl": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_t.jpg",
 "partial": false,
 "label": "Spot Kantin Atas",
 "id": "panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B9CB2016_A155_BC4B_41E1_E677472BED0C",
  "this.overlay_B646B1CA_A155_9FD8_41E3_A25A0C6E1591",
  "this.overlay_A07CE750_B0EF_EF11_41E1_A86DB3689C34"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_t.jpg",
 "partial": false,
 "label": "Kolam Baru Atas",
 "id": "panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B7BD363D_A15F_E4B9_41CB_7FDC16E6F84B",
  "this.overlay_A0DA9E26_B0E1_E131_41DE_C20C6277F8A4"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_camera"
},
{
 "thumbnailUrl": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_t.jpg",
 "partial": false,
 "label": "Gazebo Kantin",
 "id": "panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B109C636_A090_596B_41DD_82A94DB14D53",
   "backwardYaw": -106.49,
   "yaw": -69.98,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B68A24E0_A155_65C7_415B_798242732B60",
  "this.overlay_B67ACB5D_A155_6CF8_41C9_5F22E923ADDB",
  "this.overlay_BF487924_B0E1_A331_41CB_048DEF872A08"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_A051BC40_B0E1_6171_41D9_B22C49953956",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Loket Karcis",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A055CC3E_B0E1_6111_41DC_CBD19CA40CA0"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_410BED85_54C0_FCF5_41D4_A27F0A1CA11A"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A0A4D4E7_B0E2_E13F_41B6_96463E446B82",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Kolam Ikan Koi",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A0D8E4E5_B0E2_E133_41E3_6B29C6F814AE"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_t.jpg",
 "partial": false,
 "label": "Jembatan Pring Atas",
 "id": "panorama_B1627E49_A091_E926_41C1_34CECE58EE5B",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505"
  },
  {
   "panorama": "this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6",
   "backwardYaw": -80.27,
   "yaw": -5.8,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B92E747F_A152_A4B9_41DA_F6745B50A442",
  "this.overlay_B855854C_A152_A4DF_41E3_2BC0B582219C",
  "this.overlay_A0F0EDE9_B0E7_A333_41C5_1B52C446362F"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_42E80E08_54C0_FFFB_41B5_C19F5ADE4109"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A0E54582_B0E7_E3F1_41DB_849332D39644",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Sungai Tanaka",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A0E15580_B0E7_E3F1_41D5_2191B9216EB6"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 99.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41CD9D3E_54C0_FC17_41CE_42EF3DC693C8"
},
{
 "shadowBlurRadius": 6,
 "id": "window_BF470753_B0E1_6F16_41D1_1C38EBAECB4B",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Gazebo Kolam Ikan",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BF431752_B0E1_6F16_41DA_69AF697D6525"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_camera"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A0AB68F1_B0E7_6113_41E5_37FAD5858E6D",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "class": "Window",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "bodyBorderSize": 0,
 "borderRadius": 5,
 "closeButtonIconWidth": 12,
 "bodyPaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "scrollBarColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "height": 350,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "title": "Jembatan Baru",
 "shadowHorizontalLength": 3,
 "gap": 10,
 "backgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "footerBackgroundOpacity": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A0A798F1_B0E7_6113_41E4_3B85E6B005CB"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "footerHeight": 5,
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 73.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41866D04_54C0_FDEB_41B1_1E47532350D0"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "minHeight": 50,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 100,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": "10px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "layout": "absolute",
 "children": [
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
  "this.Image_4E4944FD_4087_30A0_41B5_155192749C7A"
 ],
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "width": 271,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "visible",
 "class": "Container",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": 20,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 97,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "--STICKER"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "layout": "absolute",
 "data": {
  "name": "--BUTTON SET"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "visible",
 "class": "Container",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#3E5CB8"
 ],
 "top": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "-button set"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "paddingRight": 0,
 "right": 15,
 "width": 60,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "class": "Container",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 300,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#3E5CB8"
 ],
 "top": 62,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "backgroundColorRatios": [
  0.02
 ]
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18",
  "this.IconButton_B74E92BD_A090_3959_41E2_B32C2E223160",
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "paddingLeft": 0,
 "paddingRight": 30,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "width": "40.659%",
 "height": 90,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "layout": "absolute",
 "data": {
  "name": "---INFO photo"
 },
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "data": {
  "name": "---PANORAMA LIST"
 },
 "id": "Container_3CE3831C_2B63_600A_41A8_6321214B5F79",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_3CE3C31C_2B63_600A_41A5_9771893F9BFD"
 ],
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_3CE3831C_2B63_600A_41A8_6321214B5F79, false, 0, null, null, false)",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "data": {
  "name": "---LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "data": {
  "name": "---FLOORPLAN"
 },
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "data": {
  "name": "---PHOTOALBUM"
 },
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "data": {
  "name": "---REALTOR"
 },
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundOpacity": 0.55,
 "paddingBottom": 0,
 "class": "UIComponent",
 "minHeight": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 0,
 "top": 0,
 "backgroundColor": [
  "#000000"
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "UIComponent38986"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "class": "ZoomImage",
 "minHeight": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColorRatios": [],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 0,
 "top": 0,
 "backgroundColor": [],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "ZoomImage38987"
 },
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton38988"
 },
 "id": "closeButtonPopupPanorama",
 "fontStyle": "normal",
 "paddingLeft": 5,
 "pressedIconColor": "#888888",
 "paddingRight": 5,
 "right": 10,
 "iconWidth": 20,
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "iconHeight": 20,
 "verticalAlign": "middle",
 "paddingBottom": 5,
 "class": "CloseButton",
 "fontWeight": "normal",
 "iconColor": "#000000",
 "minHeight": 0,
 "propagateClick": false,
 "rollOverIconColor": "#666666",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "minWidth": 0,
 "top": 10,
 "borderColor": "#000000",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "visible": false,
 "layout": "horizontal",
 "textDecoration": "none",
 "cursor": "hand",
 "iconLineWidth": 5
},
{
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Mute"
 },
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "fontStyle": "normal",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "Button",
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "borderColor": "#000000",
 "rollOverBackgroundOpacity": 1,
 "minWidth": 1,
 "fontSize": 12,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ]
},
{
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "fontStyle": "normal",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "Button",
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "borderColor": "#000000",
 "rollOverBackgroundOpacity": 1,
 "minWidth": 1,
 "fontSize": 12,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -123.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.56,
   "hfov": 26.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1641DBE_D813_F984_41E7_62A6FA460423",
   "pitch": 9.56,
   "yaw": -123.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.13,
   "distance": 100
  }
 ],
 "id": "overlay_BBCB6F49_A153_64D8_41E0_4F8F1D0EDB27",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 16.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10,
   "hfov": 26.09
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C165CDBF_D813_F984_419F_46CDFEA2E51D",
   "pitch": -10,
   "yaw": 16.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.09,
   "distance": 100
  }
 ],
 "id": "overlay_B701E23A_A152_9CB8_41DA_B13DC047048F",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 6.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.32,
   "hfov": 9.56
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD580B66_B9EB_63EE_4174_9DCB40AE6668",
   "pitch": -45.32,
   "yaw": 6.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.56,
   "distance": 100
  }
 ],
 "id": "overlay_A0F645D4_B0E7_E311_41E1_37386B13FD90",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A0E54582_B0E7_E3F1_41DB_849332D39644, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 12.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.4,
   "hfov": 26.45
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD62FB5A_B9EB_6326_41CE_F76543DF1702",
   "pitch": 3.4,
   "yaw": 12.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.45,
   "distance": 100
  }
 ],
 "id": "overlay_B86FF44F_A155_64D8_41D8_925C55B7056E",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050, this.camera_42E80E08_54C0_FFFB_41B5_C19F5ADE4109); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -179.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.55,
   "hfov": 20.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5EEE1BA_A555_91A3_41DB_3B0B46A113EB",
   "pitch": -40.55,
   "yaw": -179.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.13,
   "distance": 100
  }
 ],
 "id": "overlay_B8C7F1D9_A155_7FF8_41E2_0BB668FF30D7",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1, this.camera_4298BDFD_54C0_FC15_41D2_AB0B7889B7DE); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 58.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.71,
   "hfov": 18.71
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD627B5B_B9EB_6326_41CC_5AB53FB880C8",
   "pitch": -5.71,
   "yaw": 58.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.71,
   "distance": 100
  }
 ],
 "id": "overlay_B3CCBDC7_AA3A_E296_41DF_B64FF2623C3D",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_B3BC7D9F_AA3A_E2B6_41E4_5AA62ACD9ED8, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A0B8B0E5_B0E3_6133_41E1_A60FF13F218E",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat bermain air dan berenang pengunjung</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_BF0C3481_B0E6_E1F3_41DC_2468601E1886",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat penjualan makanan seperti gorengan dan minuman dengan harga mulai Rp 500</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A0D818EB_B0E6_A137_41E5_525CA14E1D35",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Gazebo pemandangan sawah</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -15.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.73,
   "hfov": 24.25
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD63DB5C_B9EB_6322_4164_5AC08E92D738",
   "pitch": -23.73,
   "yaw": -15.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.25,
   "distance": 100
  }
 ],
 "id": "overlay_B9C57643_A155_A4C9_41C6_CEED6AF8BAA0",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B135E99D_A097_EB59_41D2_249722990E6A, this.camera_41308D79_54C0_FC1D_41B9_908699AFAC52); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -170.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.61,
   "hfov": 24.96
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5ED41BA_A555_91A3_41E0_C58124C3701D",
   "pitch": -19.61,
   "yaw": -170.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.96,
   "distance": 100
  }
 ],
 "id": "overlay_B87AD3B2_A155_9C4B_41E1_EEB0BD309C5D",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F, this.camera_410BED85_54C0_FCF5_41D4_A27F0A1CA11A); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -4.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.45,
   "hfov": 23.92
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5E561C8_A555_91E0_41E0_BF9FE241E5F3",
   "pitch": -25.45,
   "yaw": -4.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.92,
   "distance": 100
  }
 ],
 "id": "overlay_B89D9ED4_A152_A5C8_41D8_FBEA1289B41F",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050, this.camera_4222AE80_54C0_FCEB_41AF_C7C247E14308); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -179.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.3,
   "hfov": 24.85
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5E521C8_A555_91E0_41DE_DBCEE9A5BF9C",
   "pitch": -20.3,
   "yaw": -179.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.85,
   "distance": 100
  }
 ],
 "id": "overlay_B7CE42D2_A152_BDCB_41E1_15633064FAB5",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428, this.camera_422DCE5F_54C0_FC15_41C8_F21EE3ACD461); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -64.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.09,
   "hfov": 13.18
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD51EB7C_B9EB_63E2_41C0_186A11EA75C0",
   "pitch": -14.09,
   "yaw": -64.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.18,
   "distance": 100
  }
 ],
 "id": "overlay_A023DC65_B0E1_6133_41CF_342FDEFD6438",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A051BC40_B0E1_6171_41D9_B22C49953956, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_B2852BD6_AA6D_E6B6_41D8_32781579C70A",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Lokasi penarikan karcis untuk membedakan warga sekitar atau pengunjung.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_B1379D86_AA2E_6296_41D6_DF1740135104",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat istirahat di depan air terjun utama</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 144.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.58,
   "hfov": 25.11
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C170BDED_D813_F984_41E9_7A3EEE2FF9DD",
   "pitch": -18.58,
   "yaw": 144.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.11,
   "distance": 100
  }
 ],
 "id": "overlay_B9091E9B_A155_A479_41D9_90929F14ADFB",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20, this.camera_41C16D4A_54C0_FC7F_41CE_FDE0EC981DEB); this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -67.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.22,
   "hfov": 13.48
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD524B7F_B9EB_63DE_41D6_BA5480EF4E5A",
   "pitch": -7.22,
   "yaw": -67.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.48,
   "distance": 100
  }
 ],
 "id": "overlay_A0438F5E_B0EF_7F0E_41D7_76E2FE8662B8",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A0709F3A_B0EF_7F11_41D1_165EA23432C4, null, false)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 6.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.36,
   "hfov": 13.59
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C171CDEE_D813_F984_41E8_200ACC05555C",
   "pitch": 1.36,
   "yaw": 6.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.59,
   "distance": 100
  }
 ],
 "id": "overlay_A52EB546_BF23_6581_41C8_C2E7AE1C523A",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A6CFF502_BF23_6581_41E0_D4F7E4FBF9F3, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -51.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.75,
   "hfov": 26.4
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1697DD6_D813_F984_41D6_D22A01689D98",
   "pitch": 4.75,
   "yaw": -51.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.4,
   "distance": 100
  }
 ],
 "id": "overlay_B9578249_A15F_9CD8_41D3_69B6F0DA2A69",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 49.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.78,
   "hfov": 25.73
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1692DD7_D813_F984_41D3_ECBEADEC160B",
   "pitch": -13.78,
   "yaw": 49.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.73,
   "distance": 100
  }
 ],
 "id": "overlay_B84BF3FB_A15F_A3B8_41E0_6E389566763C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.67,
   "hfov": 12.54
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD5C3B71_B9EB_63E2_41D6_4D03CD5106D9",
   "pitch": -22.67,
   "yaw": 0.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.54,
   "distance": 100
  }
 ],
 "id": "overlay_A0AA850B_B0E2_E0F7_41D5_D2492EC5CC5F",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A0A4D4E7_B0E2_E13F_41B6_96463E446B82, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -170.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.64,
   "hfov": 24.79
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5EFF1B8_A555_91AF_41D9_6E9B552ACB3E",
   "pitch": -20.64,
   "yaw": -170.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.79,
   "distance": 100
  }
 ],
 "id": "overlay_B7EF3B7A_A156_ACBB_41DA_65FE74164650",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3, this.camera_41280D62_54C0_FC2F_419C_462CD4F3357E); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 2.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.4,
   "hfov": 21.6
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5EFB1B8_A555_91AF_41DE_CED5ACD31416",
   "pitch": -35.4,
   "yaw": 2.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.6,
   "distance": 100
  }
 ],
 "id": "overlay_B9AE6CA6_A156_E44B_41BA_E6CC864C3BE5",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F, this.camera_413C3D6E_54C0_FC37_41C2_A869B1A4A5C1); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_BF75E8FA_B0E1_A111_41E4_F0914509F949",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat makan pengunjung</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A068E23B_B0EF_A117_41C1_7C090C1E9030",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Ikonik tulisan Umbulan Tanaka yang juga mengeluarkan air terjun</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -171.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.31,
   "hfov": 17.02
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD6C9B46_B9EB_632E_41E3_8E8EE4F1FC20",
   "pitch": -7.31,
   "yaw": -171.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.02,
   "distance": 100
  }
 ],
 "id": "overlay_B874BA91_A15E_AC49_41D2_1461C2F33830",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1643AC8_A093_E927_41C3_DF05BED144E3, this.camera_4146EDC1_54C0_FC6D_41D4_A38BCE7C279D); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 78.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.47,
   "hfov": 9.1
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B213D884_AA55_E28A_41D1_B61979E2E3AC",
   "pitch": -0.47,
   "yaw": 78.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.1,
   "distance": 50
  }
 ],
 "id": "overlay_BF0664E5_AA6A_A28A_41A5_23158186E783",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B11D279A_A090_275B_417B_FC2CAC819341, this.camera_41558DCD_54C0_FC75_41C5_5CB614D8DC29); this.mainPlayList.set('selectedIndex', 23)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -154.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.01,
   "hfov": 12.51
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD6ECB4D_B9EB_6322_41D4_4AD1C875CAAB",
   "pitch": -23.01,
   "yaw": -154.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.51,
   "distance": 100
  }
 ],
 "id": "overlay_BF54552C_B0E2_E331_41D1_9644EC8984E2",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_BF42E500_B0E2_E0F1_41BD_41267071D17A, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_B093238E_AA3A_A696_41B0_6207A353409C",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat parkir sepeda motor pengunjung</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:21px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 46.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.49,
   "hfov": 15.12
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C173BDEB_D813_F98C_41B2_A15ABEC6B826",
   "pitch": -24.49,
   "yaw": 46.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.12,
   "distance": 50
  }
 ],
 "id": "overlay_B79B3426_A153_6448_41E3_A8BBCE567D69",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -34.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.64,
   "hfov": 12.63
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1730DEC_D813_F984_41D8_3A74663CA8C6",
   "pitch": -21.64,
   "yaw": -34.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.63,
   "distance": 100
  }
 ],
 "id": "overlay_A05C3369_B0EE_A733_41CA_C40E897F3F1E",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A04B2340_B0EE_A771_41C4_97D3C6941147, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 169.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.59,
   "hfov": 10.15
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B21B3890_AA55_E28A_41DE_15E50715242A",
   "pitch": -9.59,
   "yaw": 169.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.15,
   "distance": 50
  }
 ],
 "id": "overlay_BFEDF050_AA7A_A18A_41BF_EC15AE22CA91",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428, this.camera_41708DB5_54C0_FC15_4182_78E9FC115775); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 96.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.94,
   "hfov": 13.42
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD503B7B_B9EB_63E6_41AA_428BCBDF3109",
   "pitch": -8.94,
   "yaw": 96.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.42,
   "distance": 100
  }
 ],
 "id": "overlay_A02571DB_B0E1_E317_41D2_677BCED75A32",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A05331B3_B0E1_E317_41BA_00B13EFE7564, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 1.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.24,
   "hfov": 25.16
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD5FBB77_B9EB_63EE_41D4_A22122DD33F4",
   "pitch": -18.24,
   "yaw": 1.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.16,
   "distance": 100
  }
 ],
 "id": "overlay_B90D259B_A15D_E479_41A7_3FE5A44CC7E3",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1029285_A090_7929_41E2_C89A52DA3664, this.camera_41D54D56_54C0_FC17_41BD_5037EFF7C239); this.mainPlayList.set('selectedIndex', 21)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -176.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.65,
   "hfov": 22.31
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5E641C7_A555_91E1_41D3_FC3A6DDF4D28",
   "pitch": -32.65,
   "yaw": -176.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.31,
   "distance": 100
  }
 ],
 "id": "overlay_B78DA886_A15D_EC48_41DE_89D06434EC62",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 102.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.67,
   "hfov": 18.32
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4C7C6A20_54C1_E42B_41B0_9F1BE044B5F1",
   "pitch": -8.67,
   "yaw": 102.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.32,
   "distance": 100
  }
 ],
 "id": "overlay_47F47BF2_54C0_A42F_41B1_C98AC24B7CA2",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_40C4CB6F_54C0_A435_41B2_7863238EF8CD, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_BF7FA4FE_B0E2_E111_41E1_25573E35EE3F",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Pintu masuk wisata Kampung Umbulan Tanaka</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 7.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.03,
   "hfov": 26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C16F4DDD_D813_F984_41B9_E2E3AB1EB7AD",
   "pitch": -11.03,
   "yaw": 7.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26,
   "distance": 100
  }
 ],
 "id": "overlay_B879A609_A15D_A458_41D6_59B7C3648E32",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B14D22F5_A090_DEE9_41E3_79352DF85407, this.camera_41F92D33_54C0_FC2D_4199_11BB24CD0046); this.mainPlayList.set('selectedIndex', 27)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -177.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.91,
   "hfov": 22.97
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5E7E1C6_A555_91E3_41D2_4D1AE300518B",
   "pitch": -29.91,
   "yaw": -177.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.97,
   "distance": 100
  }
 ],
 "id": "overlay_BBC9E977_A15D_ACC8_41E2_648D262620F8",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1451597_A090_5B29_41B5_2F257A69E24C, this.camera_41E68D26_54C0_FC37_41D3_9B0D4B114323); this.mainPlayList.set('selectedIndex', 22)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -48.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.79,
   "hfov": 13.56
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C16C8DDF_D813_F984_41E4_1E2A2C971407",
   "pitch": -3.79,
   "yaw": -48.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.56,
   "distance": 100
  }
 ],
 "id": "overlay_A0BBA45D_B0E3_A113_41CC_33E0F34803F6",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A0AAB438_B0E3_A111_41E4_254B89DC7EAE, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_B3A7ED9F_AA3A_E2B6_41E0_6848C20B8A6F",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Lokasi penarikan karcis untuk membedakan warga sekitar atau pengunjung.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -72.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.29,
   "hfov": 9.73
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD654B62_B9EB_63E6_41B6_E23C54EE1703",
   "pitch": -44.29,
   "yaw": -72.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.73,
   "distance": 100
  }
 ],
 "id": "overlay_A0AE8913_B0E6_A316_41DE_26DBC70D210A",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A0DC08EC_B0E6_A131_41D4_053ACA78FE85, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 8.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.46,
   "hfov": 17.77
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1612DB9_D813_F98C_41D3_D4F69F338C0F",
   "pitch": -16.46,
   "yaw": 8.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.77,
   "distance": 100
  }
 ],
 "id": "overlay_B0AF2563_BF23_6587_41E0_7CA7C7B1679A",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ]
},
{
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings HS"
 },
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "fontStyle": "normal",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "Button",
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "minWidth": 1,
 "fontSize": 12,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ]
},
{
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Gyro"
 },
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "fontStyle": "normal",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "Button",
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "minWidth": 1,
 "fontSize": 12,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ]
},
{
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button settings VR"
 },
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "fontStyle": "normal",
 "paddingRight": 0,
 "paddingBottom": 0,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "Button",
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundOpacity": 1,
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "fontSize": 12,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "layout": "horizontal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A074AF39_B0EF_7F13_41E4_DF8C6B3CEA2D",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Taman bermain untuk anak anak yang masih dalam tahap pengembangan</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A05721B2_B0E1_E311_41D0_09FD4BD37D06",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat parkir mobil para pengunjung yang dilengkapi toilet dan mushola. Untuk tarif parkir mobil sebesar Rp 5.000</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A0AEA437_B0E3_A11F_41D8_946B72BAED91",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Lorong jalan dengan nuansa Jepang yang terdiri dari aksesoris Jepang</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 23.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.45,
   "hfov": 25.66
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B2130886_AA55_E296_41E0_64C266E3117A",
   "pitch": -14.45,
   "yaw": 23.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.66,
   "distance": 100
  }
 ],
 "id": "overlay_B7DA9DDB_A157_E7F9_41DF_7CB436FE9B70",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0, this.camera_42ABBDD9_54C0_FC1D_41CD_929401725D69); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 76.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.83,
   "hfov": 15.8
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C11CADA9_D813_F98C_41E3_60A75BA0E489",
   "pitch": -32.83,
   "yaw": 76.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.8,
   "distance": 100
  }
 ],
 "id": "overlay_BD86A3F6_AA6A_A676_41D5_A52960B8C652",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_B286FBD5_AA6D_E68A_41C9_4B4B86AC25F4, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -162.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.25,
   "hfov": 25.01
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B2123887_AA55_E296_41B1_957D626A2167",
   "pitch": -19.25,
   "yaw": -162.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.01,
   "distance": 100
  }
 ],
 "id": "overlay_B264EB78_AA6E_A67B_41C0_B9041C5C1BE7",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1, this.camera_42BB1DE5_54C0_FC35_41C1_18843F47668A); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 123.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.54,
   "hfov": 25.26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5EDF1BB_A555_91A1_41D8_083A262E03BF",
   "pitch": -17.54,
   "yaw": 123.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.26,
   "distance": 100
  }
 ],
 "id": "overlay_B73F5AFF_A155_ADB9_417A_FCEBAEF2864C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -15.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.02,
   "hfov": 11.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD642B5F_B9EB_63DE_41E2_C5E811D87CE1",
   "pitch": -35.02,
   "yaw": -15.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.13,
   "distance": 100
  }
 ],
 "id": "overlay_BF514780_B0E1_6FF1_41E1_B319E3771079",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_BF470753_B0E1_6F16_41D1_1C38EBAECB4B, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 156.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.03,
   "hfov": 26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1675DBC_D813_F984_41E3_69C613FD2E27",
   "pitch": -11.03,
   "yaw": 156.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26,
   "distance": 100
  }
 ],
 "id": "overlay_BB11A94B_A153_ACD9_41E2_9E4807E27DBE",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -75.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.39,
   "hfov": 26.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1670DBD_D813_F984_4167_846F54D5DF20",
   "pitch": -0.39,
   "yaw": -75.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.49,
   "distance": 100
  }
 ],
 "id": "overlay_B9CBB077_A153_BCC8_41DD_C17963E4DA2A",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862, this.camera_419E9D0F_54C0_FDF5_41B2_264492A80F37); this.mainPlayList.set('selectedIndex', 25)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -1.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -54.24,
   "hfov": 7.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD676B64_B9EB_63E2_41D2_E685A75FC587",
   "pitch": -54.24,
   "yaw": -1.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.94,
   "distance": 100
  }
 ],
 "id": "overlay_A0BB391F_B0E7_630F_41AF_195C90622CF2",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A0AB68F1_B0E7_6113_41E5_37FAD5858E6D, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A5354509_BF23_6583_41E0_C6D485F00BAB",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -85.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.6,
   "hfov": 26.26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C16B1DD1_D813_F99C_41E3_BD06C10B419F",
   "pitch": -7.6,
   "yaw": -85.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.26,
   "distance": 100
  }
 ],
 "id": "overlay_B711173B_A15D_A4B9_41D4_D126D5D4DC7F",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 102.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.01,
   "hfov": 12.82
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C168FDD2_D813_F99C_4193_7D1F2BC59A9F",
   "pitch": -31.01,
   "yaw": 102.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.82,
   "distance": 50
  }
 ],
 "id": "overlay_B94415A2_A15E_E44B_41E3_3D19040FADAF",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -11.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.79,
   "hfov": 13.54
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD5A6B6D_B9EB_63E2_41E2_5BFD6140586B",
   "pitch": 4.79,
   "yaw": -11.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.54,
   "distance": 100
  }
 ],
 "id": "overlay_A0E134A7_B0E6_E13F_41D7_B2E6870421E8",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_BF100482_B0E6_E1F1_41DF_9C5078C2ABC4, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A0E3BD8D_B0E7_A3F2_41DC_E44640B3B436",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Jembatan Pring yang terbuat dari bambu untuk menyebrang dari satu spot ke spot lain</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -94.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.03,
   "hfov": 26.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1769DF4_D813_F984_41B5_22F33BED2B22",
   "pitch": -0.03,
   "yaw": -94.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.49,
   "distance": 100
  }
 ],
 "id": "overlay_B78AB2A5_A156_9C49_41CE_704DB84F22FF",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1029285_A090_7929_41E2_C89A52DA3664, this.camera_41928D1A_54C0_FC1F_41A1_F536BA299C2D); this.mainPlayList.set('selectedIndex', 21)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 3.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.25,
   "hfov": 13.41
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD541B85_B9EB_6322_41C6_E436A3D39EAB",
   "pitch": 9.25,
   "yaw": 3.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.41,
   "distance": 100
  }
 ],
 "id": "overlay_A0470264_B0EF_A131_41C5_FE1E4C1BED92",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A074F23D_B0EF_A113_41DE_53C41827CD02, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 108.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.7,
   "hfov": 25.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C177DDF5_D813_F984_41AC_23642114C6D5",
   "pitch": -11.7,
   "yaw": 108.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.94,
   "distance": 100
  }
 ],
 "id": "overlay_A5DE5C6D_BF2F_6B83_41C6_0108505C86EF",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 143.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.93,
   "hfov": 14.1
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD5DBB73_B9EB_63E6_41E0_E74E70801D51",
   "pitch": -11.93,
   "yaw": 143.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.1,
   "distance": 50
  }
 ],
 "id": "overlay_B6F5A649_AA2A_A19A_41D2_5CE6E32AB766",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52, this.camera_42890DF1_54C0_FC2D_41AD_93B536E4C524); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 31.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.7,
   "hfov": 12.44
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD5D3B74_B9EB_63E2_41D0_A5E8DDE266DD",
   "pitch": -23.7,
   "yaw": 31.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.44,
   "distance": 100
  }
 ],
 "id": "overlay_A08B710D_B0E3_60F3_41CF_FCC060B67E82",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A08480E7_B0E3_613F_41E4_4B77E4F445E2, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_BF3FF3FC_B0E7_6711_41E3_DF28E56705F5",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Sumber utama air terjun Tanaka</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_40D93B75_54C0_A415_41CE_FB5EDA7B47F7",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Kolam yang berisi banyak ikan, pengunjung bisa memberi makan ikan</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -72.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.49,
   "hfov": 10.29
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5E821B0_A555_91BF_41D9_F87B9F354F0F",
   "pitch": 2.49,
   "yaw": -72.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.29,
   "distance": 50
  }
 ],
 "id": "overlay_AA161F44_A490_B14A_41D7_C019355BE4AF",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B135E99D_A097_EB59_41D2_249722990E6A, this.camera_41185D90_54C0_FCEB_41D0_1576D6FCD692); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -141.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.03,
   "hfov": 10.11
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5E8B1B6_A555_91A3_41B8_64319B500F9E",
   "pitch": -11.03,
   "yaw": -141.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.11,
   "distance": 50
  }
 ],
 "id": "overlay_B6F8F0D1_A493_8F4B_41E3_2B06D35254E8",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 58.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.71,
   "hfov": 18.71
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD6F0B51_B9EB_6322_41CC_D1559C18882B",
   "pitch": -5.71,
   "yaw": 58.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.71,
   "distance": 100
  }
 ],
 "id": "overlay_B0B693B7_AA3A_A6F6_41E2_D79FB7CECE13",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_B0AF1390_AA3A_A68A_41C6_089480A52477, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 105.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.45,
   "hfov": 18.16
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C11FADA7_D813_F984_41E6_01CBDA5AC182",
   "pitch": -11.45,
   "yaw": 105.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.16,
   "distance": 100
  }
 ],
 "id": "overlay_A8C16868_B9ED_6DE2_41CB_D4DA0CD259E2",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A, this.camera_41137D9D_54C0_FC15_41CD_67EC62D1F16C); this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 169.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.44,
   "hfov": 10.01
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C11F2DA7_D813_F983_41DB_81723486BDE2",
   "pitch": -13.44,
   "yaw": 169.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.01,
   "distance": 50
  }
 ],
 "id": "overlay_A809B07E_B9E5_7DDE_41C2_2C1272854ECC",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_BF365EBC_B0E6_A111_41D8_02575AA9162A",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana sumber air terjun baru untuk berenang</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A0C8AE02_B0E1_E0F1_41D6_155B8361ED5E",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Perencanaan untuk pengembangan Kolam air terjun baru</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A06DD72A_B0EF_EF31_419F_B6A91BEB1AA3",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat yang menjual makanan ringan dengan harga mulai Rp 500</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -1.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.41,
   "hfov": 25.66
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1657DCA_D813_F98D_41DD_47EC98C9F807",
   "pitch": -14.41,
   "yaw": -1.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.66,
   "distance": 100
  }
 ],
 "id": "overlay_B690492F_A15D_6C58_41CC_3BE6C658FF8C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0, this.camera_42CE4E20_54C0_FC2B_41CE_F7B0FB77CFE9); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -166.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.27,
   "hfov": 25.01
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1652DCB_D813_F98C_41E5_FF22E59D0BDF",
   "pitch": -19.27,
   "yaw": -166.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.01,
   "distance": 100
  }
 ],
 "id": "overlay_B95DC9FA_A15D_6FBB_41E3_A76E501F1258",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B109C636_A090_596B_41DD_82A94DB14D53, this.camera_42DE6E47_54C0_FC75_41B5_E8FE822171EF); this.mainPlayList.set('selectedIndex', 16)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -68.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.71,
   "hfov": 13.26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD59AB69_B9EB_63E2_41D6_2269D2B16E9E",
   "pitch": -12.71,
   "yaw": -68.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.26,
   "distance": 100
  }
 ],
 "id": "overlay_BF0E2424_B0E7_6131_41B6_856CC8AA4732",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_BF03C3FD_B0E7_6713_41E2_57D977CA22F4, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A04F333F_B0EE_A70F_41E0_C27CBBE9C66E",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Sebagai penghubung antara lorong bawah menuju kantin atas</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -179.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.77,
   "hfov": 13.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD5ABB6B_B9EB_63E6_41D8_35D7A2D0C8CF",
   "pitch": -14.77,
   "yaw": -179.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.14,
   "distance": 100
  }
 ],
 "id": "overlay_BF049EE6_B0E6_A131_41E0_C4B7B77E76AD",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_BF3A4EBE_B0E6_A111_41C2_A3202553F5A5, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 91.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.77,
   "hfov": 9.91
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C16BFDCF_D813_F984_41B9_000B9C0F4F2D",
   "pitch": -15.77,
   "yaw": 91.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.91,
   "distance": 50
  }
 ],
 "id": "overlay_A92730ED_BF23_7C83_41E5_99F2EB8F64C4",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1309181_A090_3B26_41AC_15016D0BDF2A, this.camera_42016EB9_54C0_FC1D_41AA_89E7566E5459); this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -106.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.21,
   "hfov": 10.28
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C16BADD0_D813_F99C_41B0_E9A2472C93FA",
   "pitch": -3.21,
   "yaw": -106.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.28,
   "distance": 50
  }
 ],
 "id": "overlay_A97A21B9_BF25_5C83_41E0_DE2867D2BE8C",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5, this.camera_4231FEA0_54C0_FC2B_41C5_2E9C6EDD7A61); this.mainPlayList.set('selectedIndex', 9)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 162.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.89,
   "hfov": 26.35
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD53AB82_B9EB_6326_41DC_2DA699E69141",
   "pitch": -5.89,
   "yaw": 162.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.35,
   "distance": 100
  }
 ],
 "id": "overlay_B6CFB44C_A156_A4D8_41D9_80A7F489D345",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.3,
   "hfov": 20.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD53DB83_B9EB_6326_41E2_4C1E38C86117",
   "pitch": -27.3,
   "yaw": 11.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.13,
   "distance": 100
  }
 ],
 "id": "overlay_B1E13284_AA2D_A68A_41DA_27B3817B844C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4, this.camera_41613DA8_54C0_FC3C_41D3_E623836596DB); this.mainPlayList.set('selectedIndex', 20)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -97.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.28,
   "hfov": 18.79
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD536B84_B9EB_6322_4194_AD1E66423E0B",
   "pitch": -2.28,
   "yaw": -97.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.79,
   "distance": 100
  }
 ],
 "id": "overlay_B1299DAD_AA2E_629A_41BA_314F6109137B",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_B13B8D87_AA2E_6296_41E3_65C391868A42, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_B0CBEC7D_BF25_6B83_41C8_591851F2E1D6",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat pusat Ikonik Wisata Umbulan Tanaka</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 138.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.3,
   "hfov": 26.15
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1668DBA_D813_F98C_41C4_80F0847E44A4",
   "pitch": -9.3,
   "yaw": 138.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.15,
   "distance": 100
  }
 ],
 "id": "overlay_B922FD4C_A152_E4D8_41E1_B56D59D93401",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -80.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.79,
   "hfov": 23.85
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5E321BD_A555_91A1_41DA_FFA2EC744DBD",
   "pitch": -25.79,
   "yaw": -80.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.85,
   "distance": 100
  }
 ],
 "id": "overlay_B7CE243B_A152_A4B8_41D1_7516CD230B02",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B1627E49_A091_E926_41C1_34CECE58EE5B, this.camera_42FECE14_54C0_FFEB_41C3_287050F004FF); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -1.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.7,
   "hfov": 13.59
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C167DDBB_D813_F98C_41CF_4CD27E6878AB",
   "pitch": -0.7,
   "yaw": -1.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.59,
   "distance": 100
  }
 ],
 "id": "overlay_B0DB9CAD_BF25_6483_41C3_FEE6E82D7B66",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_B0F6BC65_BF25_6B83_41E2_741C6A5B7ACB, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -1.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.7,
   "hfov": 25.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C170DDEF_D813_F984_41CD_640423CABFC3",
   "pitch": -11.7,
   "yaw": -1.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.94,
   "distance": 100
  }
 ],
 "id": "overlay_B9CB2016_A155_BC4B_41E1_E677472BED0C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 73.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.1,
   "hfov": 25.7
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C170BDF0_D813_F99C_41D0_86397ECFE026",
   "pitch": -14.1,
   "yaw": 73.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.7,
   "distance": 100
  }
 ],
 "id": "overlay_B646B1CA_A155_9FD8_41E3_A25A0C6E1591",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -92.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.36,
   "hfov": 13.59
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1701DF1_D813_F99C_41D3_79ED7D645497",
   "pitch": 1.36,
   "yaw": -92.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.59,
   "distance": 100
  }
 ],
 "id": "overlay_A07CE750_B0EF_EF11_41E1_A86DB3689C34",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A069C72B_B0EF_EF37_41D8_B9C4CF5222BE, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 6.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.53,
   "hfov": 21.64
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1683DD4_D813_F984_41E0_BC7C74AE8319",
   "pitch": -7.53,
   "yaw": 6.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.64,
   "distance": 100
  }
 ],
 "id": "overlay_B7BD363D_A15F_E4B9_41CB_7FDC16E6F84B",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -77.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.07,
   "hfov": 12.31
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD5B2B6E_B9EB_63FE_41D7_2AACDF938F7D",
   "pitch": -25.07,
   "yaw": -77.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.31,
   "distance": 100
  }
 ],
 "id": "overlay_A0DA9E26_B0E1_E131_41DE_C20C6277F8A4",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A0D4BE03_B0E1_E0F7_41DC_5CA8F476E373, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 89.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.94,
   "hfov": 24.91
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1609DB6_D813_F984_41B4_B47B165955A2",
   "pitch": -19.94,
   "yaw": 89.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.91,
   "distance": 100
  }
 ],
 "id": "overlay_B68A24E0_A155_65C7_415B_798242732B60",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -69.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.94,
   "hfov": 26.24
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1606DB7_D813_F983_41A5_B90EE78F8D12",
   "pitch": -7.94,
   "yaw": -69.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.24,
   "distance": 100
  }
 ],
 "id": "overlay_B67ACB5D_A155_6CF8_41C9_5F22E923ADDB",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B109C636_A090_596B_41DD_82A94DB14D53, this.camera_41866D04_54C0_FDEB_41B1_1E47532350D0); this.mainPlayList.set('selectedIndex', 16)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -7.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.41,
   "hfov": 13.57
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD653B61_B9EB_63E2_41C1_AA04F628EC72",
   "pitch": 3.41,
   "yaw": -7.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.57,
   "distance": 100
  }
 ],
 "id": "overlay_BF487924_B0E1_A331_41CB_048DEF872A08",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_BF7998FB_B0E1_A117_41E2_B3EC9A830FD9, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A055CC3E_B0E1_6111_41DC_CBD19CA40CA0",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat pembelian karcis dengan harga Rp 5.000</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A0D8E4E5_B0E2_E133_41E3_6B29C6F814AE",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Kolam yang berisi banyak ikan, pengunjung bisa memberi makan ikan</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -5.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.84,
   "hfov": 25.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1652DC6_D813_F984_41DE_51F21070A978",
   "pitch": -15.84,
   "yaw": -5.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.49,
   "distance": 100
  }
 ],
 "id": "overlay_B92E747F_A152_A4B9_41DA_F6745B50A442",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B131A77A_A090_27DA_41B8_67399ED091A6, this.camera_41CD9D3E_54C0_FC17_41CE_42EF3DC693C8); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -178.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.46,
   "hfov": 21.03
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5E3C1C0_A555_91E0_41DC_7496BED013D7",
   "pitch": -37.46,
   "yaw": -178.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.03,
   "distance": 100
  }
 ],
 "id": "overlay_B855854C_A152_A4DF_41E3_2BC0B582219C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 100.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.16,
   "hfov": 11.98
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD591B67_B9EB_63EE_41D0_A67C2ED1935D",
   "pitch": -28.16,
   "yaw": 100.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.98,
   "distance": 100
  }
 ],
 "id": "overlay_A0F0EDE9_B0E7_A333_41C5_1B52C446362F",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_A0E7AD8E_B0E7_A3F1_41DE_5997E5612A03, null, false)"
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A0E15580_B0E7_E3F1_41D5_2191B9216EB6",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Aliran sungai yang jernih berasal dari mata air pegunungan</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_BF431752_B0E1_6F16_41DA_69AF697D6525",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat istirahat berpiknik dan makan</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A0A798F1_B0E7_6113_41E4_3B85E6B005CB",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Jembatan penghubung ke tempat permainan</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "textShadowColor": "#000000",
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 0,
 "width": 236,
 "data": {
  "name": "text 2"
 },
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "text": "Guide Your VR Tourism",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "textShadowBlurRadius": 10,
 "propagateClick": false,
 "bottom": -5,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 32,
 "fontSize": 18,
 "horizontalAlign": "left",
 "textShadowVerticalLength": 0,
 "textShadowOpacity": 1,
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "maxHeight": 641,
 "id": "Image_4E4944FD_4087_30A0_41B5_155192749C7A",
 "left": "0.09%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "minHeight": 1,
 "url": "skin/Image_4E4944FD_4087_30A0_41B5_155192749C7A.png",
 "top": "13.4%",
 "bottom": "33.61%",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "width": "55.424%",
 "propagateClick": false,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Image3057"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 1871
},
{
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "width": 450,
 "data": {
  "name": "Label Company Name"
 },
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "Label",
 "text": "Kampung Umbulan Tanaka",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 60,
 "top": "0%",
 "fontSize": 31,
 "horizontalAlign": "left",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "maxHeight": 30,
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 30,
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "minHeight": 1,
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "top": "3.33%",
 "bottom": "-3.33%",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "width": "5%",
 "propagateClick": false,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "logo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 40
},
{
 "layout": "horizontal",
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "width": 1199,
 "paddingRight": 15,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "height": 60,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "width": 44,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "height": 44,
 "click": "this.showPopupImage(this.ImageResource_836F86A0_A5EA_694A_41DE_2F8C4189B9FF, null, '90%', '90%', this.FadeInEffect_836F96A0_A5EA_694A_41D3_CA4B35C5059A, this.FadeOutEffect_836FE6A0_A5EA_694A_41D3_09F844F5C122, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0}, null, null, false)",
 "transparencyActive": true,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "width": 44,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "height": 44,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "width": 44,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "transparencyActive": true,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "width": 44,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://goo.gl/maps/uUJJkDmAhCJa31Ng9', '_blank')",
 "transparencyActive": true,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "width": 44,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "transparencyActive": true,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18.png",
 "id": "IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18",
 "width": 44,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18_rollover.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "transparencyActive": true,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_B74E92BD_A090_3959_41E2_B32C2E223160.png",
 "id": "IconButton_B74E92BD_A090_3959_41E2_B32C2E223160",
 "width": 36.8,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_B74E92BD_A090_3959_41E2_B32C2E223160_rollover.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "height": 39.2,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "transparencyActive": true,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "width": 38.4,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "height": 44.8,
 "click": "this.openLink('https://www.instagram.com/dewivtour/', '_blank')",
 "transparencyActive": true,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "width": 36,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "height": 41.6,
 "click": "this.openLink('https://www.youtube.com/@user-gx1gq7me2z', '_blank')",
 "transparencyActive": true,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingRight": 0,
 "right": "15%",
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderSize": 0,
 "horizontalAlign": "right",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_3CE3C31C_2B63_600A_41A5_9771893F9BFD",
 "left": "15%",
 "paddingRight": 0,
 "right": "15%",
 "layout": "absolute",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "children": [
  "this.Image_3CE3D31C_2B63_600A_41A2_B2EA17D1BD30",
  "this.HTMLText_3CE3E31C_2B63_600A_41C3_55352588D7C6",
  "this.Image_3CE3F31C_2B63_600A_41B6_E5A484198BA9"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingRight": 0,
 "right": "15%",
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderSize": 0,
 "horizontalAlign": "right",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingRight": 0,
 "right": "15%",
 "layout": "absolute",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingRight": 0,
 "right": "15%",
 "layout": "vertical",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "paddingRight": 0,
 "right": "15%",
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderSize": 0,
 "horizontalAlign": "right",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1641DBE_D813_F984_41E7_62A6FA460423",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C165CDBF_D813_F984_419F_46CDFEA2E51D",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD580B66_B9EB_63EE_4174_9DCB40AE6668",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1D9B87A_A091_E9DB_41D7_7471E0FB1A30_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_AD62FB5A_B9EB_6326_41CE_F76543DF1702",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5EEE1BA_A555_91A3_41DB_3B0B46A113EB",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD627B5B_B9EB_6326_41CC_5AB53FB880C8",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1D81EC1_A090_2929_41C8_717EDFC4BB5F_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_AD63DB5C_B9EB_6322_4164_5AC08E92D738",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5ED41BA_A555_91A3_41E0_C58124C3701D",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1FA00D0_A090_7927_41DC_4491BB404BF1_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5E561C8_A555_91E0_41E0_BF9FE241E5F3",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5E521C8_A555_91E0_41DE_DBCEE9A5BF9C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD51EB7C_B9EB_63E2_41C0_186A11EA75C0",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1643AC8_A093_E927_41C3_DF05BED144E3_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C170BDED_D813_F984_41E9_7A3EEE2FF9DD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD524B7F_B9EB_63DE_41D6_BA5480EF4E5A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_C171CDEE_D813_F984_41E8_200ACC05555C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2AE5D1D_A090_2B59_41DB_4D026C9FF862_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1697DD6_D813_F984_41D6_D22A01689D98",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1692DD7_D813_F984_41D3_ECBEADEC160B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD5C3B71_B9EB_63E2_41D6_4D03CD5106D9",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B162A118_A090_FB26_41D6_F8033AC432FF_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5EFF1B8_A555_91AF_41D9_6E9B552ACB3E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5EFB1B8_A555_91AF_41DE_CED5ACD31416",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B17BD318_A097_DF27_41D2_AA46F0F0A050_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_AD6C9B46_B9EB_632E_41E3_8E8EE4F1FC20",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B213D884_AA55_E28A_41D1_B61979E2E3AC",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD6ECB4D_B9EB_6322_41D4_4AD1C875CAAB",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1614BD0_A090_2F27_41CF_C5443A6B1428_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C173BDEB_D813_F98C_41B2_A15ABEC6B826",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_1_HS_0_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_C1730DEC_D813_F984_41D8_3A74663CA8C6",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B15AFEAB_A093_E979_41B6_E30577AEAD9A_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B21B3890_AA55_E28A_41DE_15E50715242A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_1_HS_2_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD503B7B_B9EB_63E6_41AA_428BCBDF3109",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B11D279A_A090_275B_417B_FC2CAC819341_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_AD5FBB77_B9EB_63EE_41D4_A22122DD33F4",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5E641C7_A555_91E1_41D3_FC3A6DDF4D28",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4C7C6A20_54C1_E42B_41B0_9F1BE044B5F1",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1451597_A090_5B29_41B5_2F257A69E24C_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C16F4DDD_D813_F984_41B9_E2E3AB1EB7AD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5E7E1C6_A555_91E3_41D2_4D1AE300518B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_C16C8DDF_D813_F984_41E4_1E2A2C971407",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1029285_A090_7929_41E2_C89A52DA3664_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD654B62_B9EB_63E6_41B6_E23C54EE1703",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1612DB9_D813_F98C_41D3_D4F69F338C0F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1F4DD45_A090_EB29_41E0_FD31D350FBAC_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B2130886_AA55_E296_41E0_64C266E3117A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_C11CADA9_D813_F98C_41E3_60A75BA0E489",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B2123887_AA55_E296_41B1_957D626A2167",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B135E99D_A097_EB59_41D2_249722990E6A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5EDF1BB_A555_91A1_41D8_083A262E03BF",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD642B5F_B9EB_63DE_41E2_C5E811D87CE1",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1D5D87C_A090_29DF_41CF_7FDCE6A43387_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1675DBC_D813_F984_41E3_69C613FD2E27",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1670DBD_D813_F984_4167_846F54D5DF20",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD676B64_B9EB_63E2_41D2_E685A75FC587",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2B4FD65_A090_2BE9_41CF_6F48310A9E20_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C16B1DD1_D813_F99C_41E3_BD06C10B419F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C168FDD2_D813_F99C_4193_7D1F2BC59A9F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD5A6B6D_B9EB_63E2_41E2_5BFD6140586B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B132F532_A090_5B6B_41DB_ED0A8832405F_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1769DF4_D813_F984_41B5_22F33BED2B22",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD541B85_B9EB_6322_41C6_E436A3D39EAB",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C177DDF5_D813_F984_41AC_23642114C6D5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B14D22F5_A090_DEE9_41E3_79352DF85407_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_AD5DBB73_B9EB_63E6_41E0_E74E70801D51",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD5D3B74_B9EB_63E2_41D0_A5E8DDE266DD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B169C827_A090_2969_41E0_3AA4BBA7D4B4_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5E821B0_A555_91BF_41D9_F87B9F354F0F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_1_HS_0_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5E8B1B6_A555_91A3_41B8_64319B500F9E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD6F0B51_B9EB_6322_41CC_D1559C18882B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C11FADA7_D813_F984_41E6_01CBDA5AC182",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C11F2DA7_D813_F983_41DB_81723486BDE2",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2CFCB01_A090_2F29_41C6_AF938348D5C0_1_HS_4_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1657DCA_D813_F98D_41DD_47EC98C9F807",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1652DCB_D813_F98C_41E5_FF22E59D0BDF",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD59AB69_B9EB_63E2_41D6_2269D2B16E9E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1309181_A090_3B26_41AC_15016D0BDF2A_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD5ABB6B_B9EB_63E6_41D8_35D7A2D0C8CF",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C16BFDCF_D813_F984_41B9_000B9C0F4F2D",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_1_HS_3_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C16BADD0_D813_F99C_41B0_E9A2472C93FA",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B109C636_A090_596B_41DD_82A94DB14D53_1_HS_4_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_AD53AB82_B9EB_6326_41DC_2DA699E69141",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_AD53DB83_B9EB_6326_41E2_4C1E38C86117",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD536B84_B9EB_6322_4194_AD1E66423E0B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B29FDEE0_A090_26E7_41D0_1E8F362A1D52_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1668DBA_D813_F98C_41C4_80F0847E44A4",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5E321BD_A555_91A1_41DA_FFA2EC744DBD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_C167DDBB_D813_F98C_41CF_4CD27E6878AB",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B131A77A_A090_27DA_41B8_67399ED091A6_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C170DDEF_D813_F984_41CD_640423CABFC3",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C170BDF0_D813_F99C_41D0_86397ECFE026",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_C1701DF1_D813_F99C_41D3_79ED7D645497",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B2ABC7AA_A090_677A_41B5_D3EF25281505_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1683DD4_D813_F984_41E0_BC7C74AE8319",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD5B2B6E_B9EB_63FE_41D7_2AACDF938F7D",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B162BAAE_A090_297B_41DE_382CAB53BCF2_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1609DB6_D813_F984_41B4_B47B165955A2",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1606DB7_D813_F983_41A5_B90EE78F8D12",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD653B61_B9EB_63E2_41C1_AA04F628EC72",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1F4DA9A_A090_295B_41D6_41B43D6F51A5_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1652DC6_D813_F984_41DE_51F21070A978",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B5E3C1C0_A555_91E0_41DC_7496BED013D7",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_AD591B67_B9EB_63EE_41D0_A67C2ED1935D",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_B1627E49_A091_E926_41C1_34CECE58EE5B_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 1"
 },
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "width": 116,
 "popUpFontColor": "#F0623E",
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "paddingLeft": 15,
 "class": "DropDown",
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "RECEPTION",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 2"
 },
 "height": "100%",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpShadowColor": "#000000",
 "width": 96,
 "popUpBorderRadius": 5,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "paddingLeft": 15,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "popUpPaddingLeft": 15,
 "class": "DropDown",
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundColor": [
  "#3E5CB8"
 ],
 "borderSize": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "minWidth": 1,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "ROOMS",
 "borderRadius": 0,
 "selectedPopUpBackgroundColor": "#CE6700",
 "backgroundColorRatios": [
  0
 ],
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpBackgroundOpacity": 1,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "popUpShadow": false,
 "visible": false,
 "textDecoration": "none",
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 3"
 },
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "width": 114,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "paddingLeft": 15,
 "class": "DropDown",
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "AMENITIES",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 4"
 },
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "width": 130,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "paddingLeft": 15,
 "class": "DropDown",
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "SPORTS AREA",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 5"
 },
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "width": 127.2,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "paddingLeft": 15,
 "class": "DropDown",
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#3E5CB8",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverPopUpBackgroundColor": "#0033CC",
 "label": "PRODUKSI",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#3E5CB8",
 "minWidth": 1,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 6"
 },
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "width": 140.2,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "paddingLeft": 8,
 "class": "DropDown",
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#3E5CB8",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverPopUpBackgroundColor": "#0033CC",
 "label": "SPOT LOKASI",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#3E5CB8",
 "minWidth": 1,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowBlurRadius": 6
},
{
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings"
 },
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "fontStyle": "normal",
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 17,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 17,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "Button",
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "fontSize": 12,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "gap": 5,
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "layout": "horizontal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "verticalAlign": "middle",
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "width": "85%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "width": 8,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "class": "Container",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "paddingRight": 50,
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "verticalAlign": "top",
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "width": "50%",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 512,
 "id": "Image_3CE3D31C_2B63_600A_41A2_B2EA17D1BD30",
 "left": "34.99%",
 "paddingRight": 0,
 "right": "47.03%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "url": "skin/Image_3CE3D31C_2B63_600A_41A2_B2EA17D1BD30.png",
 "top": "30.94%",
 "minWidth": 1,
 "borderSize": 0,
 "height": "21.638%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_3CE3831C_2B63_600A_41A8_6321214B5F79, false, 0, null, null, false); this.playGlobalAudio(this.audio_33CAF19C_2B63_E00A_41BC_E9D53AF3B21C)",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Image7656"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 512
},
{
 "id": "HTMLText_3CE3E31C_2B63_600A_41C3_55352588D7C6",
 "left": "27.16%",
 "paddingRight": 10,
 "right": "22.83%",
 "paddingLeft": 10,
 "paddingBottom": 20,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 5,
 "top": "5.47%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderRadius": 0,
 "height": "24.678%",
 "scrollBarColor": "#FFFFFF",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:7.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.58vh;font-family:'Montserrat';\"><B>Pilih Bahasa Audio</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>Chose audio language</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "maxHeight": 512,
 "id": "Image_3CE3F31C_2B63_600A_41B6_E5A484198BA9",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "30.97%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "class": "Image",
 "minHeight": 1,
 "url": "skin/Image_3CE3F31C_2B63_600A_41B6_E5A484198BA9.png",
 "top": "31.09%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "17.588%",
 "height": "20.923%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_3CE3831C_2B63_600A_41A8_6321214B5F79, false, 0, null, null, false); this.playGlobalAudio(this.audio_4B86E029_448A_66CC_41B0_7144E825DB5E)",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Image8713"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 512
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "insetBorder": false,
 "height": "100%"
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "minHeight": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "paddingTop": 0,
 "toolTipFontSize": "10px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "layout": "absolute",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "width": "100%",
 "height": 140,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "verticalAlign": "top",
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "verticalAlign": "middle",
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "width": "55%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "width": 8,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "class": "Container",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingLeft": 60,
 "paddingRight": 60,
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "verticalAlign": "top",
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "width": "45%",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "minHeight": 1,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000
},
{
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "minHeight": 0,
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "verticalAlign": "top",
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 520,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingRight": 0,
 "paddingBottom": 0,
 "width": 370,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "top": 20,
 "minWidth": 50,
 "borderSize": 0,
 "width": "100%",
 "mode": "push",
 "height": "36.14%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderRadius": 0,
 "horizontalAlign": "right",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "minHeight": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": "10px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": "0%",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "class": "IconButton",
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "borderSize": 0,
 "borderRadius": 0,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "class": "IconButton",
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "borderSize": 0,
 "borderRadius": 0,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "top": 20,
 "minWidth": 50,
 "borderSize": 0,
 "width": "10%",
 "mode": "push",
 "height": "10%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderRadius": 0,
 "horizontalAlign": "right",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "minHeight": 1,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000
},
{
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "minHeight": 0,
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "verticalAlign": "top",
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 520,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingRight": 0,
 "paddingBottom": 0,
 "width": 370,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#F7931E",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.72vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.29vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.58vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "width": 180,
 "shadowSpread": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "Button",
 "fontWeight": "bold",
 "backgroundOpacity": 0.8,
 "minHeight": 1,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "iconBeforeLabel": true,
 "height": 50,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "fontSize": "1.96vh",
 "label": "LOREM IPSUM",
 "shadowColor": "#000000",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "45%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.87vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>Kampung Wisata </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>Kesenian</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0
},
{
 "layout": "horizontal",
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "verticalAlign": "top",
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "class": "Image",
 "minHeight": 1,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "25%",
 "height": "100%",
 "borderRadius": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 200
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#F7931E",
 "width": "75%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>Bapak Agus</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.29vh;font-family:'Montserrat';\">PENGELOLA DESA</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0
}],
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "vrPolyfillScale": 0.59,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "desktopMipmappingEnabled": false,
 "gap": 10,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scripts": {
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
