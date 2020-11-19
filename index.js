import { render } from "react-dom";
import "./index.css";
import * as React from "react";
import { SampleBase } from "./sample-base";
import {
  SplitterComponent,
  PanesDirective,
  PaneDirective
} from "@syncfusion/ej2-react-layouts";
import {
  ColumnDirective,
  ColumnsDirective,
  TreeGridComponent
} from "@syncfusion/ej2-react-treegrid";
import { Filter, Inject, Page, Sort } from "@syncfusion/ej2-react-treegrid";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { MenuComponent } from "@syncfusion/ej2-react-navigations";
import {
  AccordionComponent,
  AccordionItemDirective,
  AccordionItemsDirective
} from "@syncfusion/ej2-react-navigations";

/**
 *  Sample for code editor layout
 */
const imgStyle = {
  width: "20%",
  margin: "0 auto"
};
const paneImg = {
  margin: "auto auto 5px"
};
const lastPaneStyle = {
  padding: "auto auto 20px"
};
export class CodeEditor extends SampleBase {
  constructor() {
    super(...arguments);
    this.paneSize = "53%";
    this.minimumSize = "30%";
    this.data = new DataManager({
      adaptor: new WebApiAdaptor(),
      crossDomain: true,
      url:
        "https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData"
    });
  }

  componentDidMount() {
    var fontfamily = [
        "Segoe UI",
        "Arial",
        "Times New Roman",
        "Tahoma",
        "Helvetica"
      ],
      fontsize = ["1pt", "2pt", "3pt", "4pt", "5pt"],
      action1 = ["New", "Clear"],
      action2 = [
        "Bold",
        "Italic",
        "Underline",
        "strikethrough",
        "superscript",
        "subscript",
        "JustifyLeft",
        "JustifyCenter",
        "JustifyRight",
        "JustifyFull",
        "Undo",
        "Redo"
      ];
    $("#defaultRibbon").ejRibbon({
      width: "100%",
      expandPinSettings: {
        toolTip: "Collapse the Ribbon"
      },
      collapsePinSettings: {
        toolTip: "Pin the Ribbon"
      },
      allowResizing: true,
      applicationTab: {
        type: ej.Ribbon.ApplicationTabType.Menu,
        menuItemID: "ribbonmenu",
        menuSettings: { openOnClick: false }
      },
      tabs: [
        {
          id: "home",
          text: "HOME",
          groups: [
            {
              text: "New",
              alignType: ej.Ribbon.AlignType.Rows,
              content: [
                {
                  groups: [
                    {
                      id: "new",
                      text: "New",
                      toolTip: "New",
                      isMobileOnly: true,
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-new",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    width: 60,
                    height: 70
                  }
                }
              ]
            },
            {
              text: "Clipboard",
              alignType: ej.Ribbon.AlignType.Columns,
              content: [
                {
                  groups: [
                    {
                      id: "paste",
                      text: "paste",
                      toolTip: "Paste",
                      splitButtonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon e-ribbonpaste",
                        targetID: "pasteSplit",
                        buttonMode: "dropdown",
                        arrowPosition: ej.ArrowPosition.Bottom,
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.SplitButton,
                    width: 50,
                    height: 70
                  }
                },
                {
                  groups: [
                    {
                      id: "cut",
                      text: "Cut",
                      toolTip: "Cut",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        prefixIcon: "e-icon e-ribbon e-ribboncut",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "copy",
                      text: "Copy",
                      toolTip: "Copy",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        prefixIcon: "e-icon e-ribbon e-ribboncopy",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "clear",
                      text: "Clear",
                      toolTip: "Clear All",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        prefixIcon: "e-icon e-ribbon clearAll",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    width: 60,
                    isBig: false
                  }
                }
              ]
            },
            {
              text: "Font",
              alignType: "rows",
              content: [
                {
                  groups: [
                    {
                      id: "fontfamily",
                      toolTip: "Font",
                      dropdownSettings: {
                        dataSource: fontfamily,
                        text: "Segoe UI",
                        select: "executeAction",
                        width: 150
                      }
                    },
                    {
                      id: "fontsize",
                      toolTip: "FontSize",
                      dropdownSettings: {
                        dataSource: fontsize,
                        text: "1pt",
                        select: "executeAction",
                        width: 65
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.DropDownList,
                    height: 28
                  }
                },
                {
                  groups: [
                    {
                      id: "bold",
                      toolTip: "Bold",
                      type: ej.Ribbon.Type.ToggleButton,
                      toggleButtonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        defaultText: "Bold",
                        activeText: "Bold",
                        defaultPrefixIcon: "e-icon e-ribbon bold",
                        activePrefixIcon: "e-icon e-ribbon bold",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "italic",
                      toolTip: "Italic",
                      type: ej.Ribbon.Type.ToggleButton,
                      toggleButtonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        defaultText: "Italic",
                        activeText: "Italic",
                        defaultPrefixIcon: "e-icon e-ribbon e-ribbonitalic",
                        activePrefixIcon: "e-icon e-ribbon e-ribbonitalic",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "underline",
                      text: "Underline",
                      toolTip: "Underline",
                      type: ej.Ribbon.Type.ToggleButton,
                      toggleButtonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        defaultText: "Underline",
                        activeText: "Underline",
                        defaultPrefixIcon: "e-icon e-ribbon e-ribbonunderline",
                        activePrefixIcon: "e-icon e-ribbon e-ribbonunderline",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "strikethrough",
                      text: "strikethrough",
                      toolTip: "Strikethrough",
                      type: ej.Ribbon.Type.ToggleButton,
                      toggleButtonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        defaultText: "Strikethrough",
                        activeText: "Strikethrough",
                        defaultPrefixIcon: "e-icon e-ribbon strikethrough",
                        activePrefixIcon: "e-icon e-ribbon strikethrough",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "superscript",
                      text: "superscript",
                      toolTip: "Superscript",
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon e-superscripticon",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "subscript",
                      text: "subscript",
                      toolTip: "Subscript",
                      enableSeparator: true,
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon e-subscripticon",
                        click: "executeAction"
                      }
                    },

                    {
                      id: "fontcolor",
                      text: "Font Color",
                      toolTip: "Font Color",
                      type: ej.Ribbon.type.custom,
                      contentID: "fontcolor"
                    },
                    {
                      id: "fillcolor",
                      text: "Fill Color",
                      toolTip: "Fill Color",
                      type: ej.Ribbon.type.custom,
                      contentID: "fillcolor"
                    }
                  ],
                  defaults: {
                    isBig: false
                  }
                }
              ]
            },
            {
              text: "Alignment",
              alignType: ej.Ribbon.AlignType.Rows,
              content: [
                {
                  groups: [
                    {
                      id: "bullet",
                      text: "Bullet Format",
                      toolTip: "Bullets",
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon e-bullet",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "number",
                      text: "Number Format",
                      toolTip: "Numbering",
                      enableSeparator: true,
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon e-numbericon",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "textindent",
                      text: "Indent",
                      toolTip: "Text Indent",
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon e-indent",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "textoudent",
                      text: "Outdent",
                      toolTip: "Text Outdent",
                      enableSeparator: true,
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon e-outdent",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "sortascending",
                      text: "Sort",
                      toolTip: "Sort",
                      enableSeparator: true,
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon e-sort",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "border",
                      text: "Border",
                      toolTip: "Border",
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon e-border",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    isBig: false
                  }
                },
                {
                  groups: [
                    {
                      id: "alignleft",
                      text: "JustifyLeft",
                      toolTip: "Align Left",
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon alignleft",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "aligncenter",
                      text: "JustifyCenter",
                      toolTip: "Align Center",
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon aligncenter",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "alignright",
                      text: "JustifyRight",
                      toolTip: "Align Right",
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon alignright",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "justify",
                      text: "JustifyFull",
                      toolTip: "Justify",
                      enableSeparator: true,
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon justify",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "uppercase",
                      text: "Upper Case",
                      toolTip: "Upper Case",
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon e-uppercase",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "lowercase",
                      text: "Lower Case",
                      toolTip: "Lower Case",
                      buttonSettings: {
                        contentType: ej.ContentType.ImageOnly,
                        prefixIcon: "e-icon e-ribbon e-lowercase",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    isBig: false
                  }
                }
              ]
            },
            {
              text: "Actions",
              alignType: ej.Ribbon.AlignType.Rows,
              content: [
                {
                  groups: [
                    {
                      id: "undo",
                      text: "Undo",
                      toolTip: "Undo",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-undo",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "redo",
                      text: "Redo",
                      toolTip: "Redo",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-redo",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    width: 40,
                    height: 70
                  }
                }
              ]
            },
            {
              text: "View",
              alignType: ej.Ribbon.AlignType.Rows,
              content: [
                {
                  groups: [
                    {
                      id: "zoomin",
                      text: "Zoom In",
                      toolTip: "Zoom In",
                      width: 58,
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-zoomin",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "zoomout",
                      text: "Zoom Out",
                      toolTip: "Zoom Out",
                      width: 70,
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-zoomout",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "fullscreen",
                      text: "Full Screen",
                      toolTip: "Full Screen",
                      width: 73,
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-fullscreen",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    height: 70
                  }
                }
              ]
            }
          ]
        },
        {
          id: "insert",
          text: "INSERT",
          groups: [
            {
              text: "Tables",
              alignType: ej.Ribbon.AlignType.Columns,
              content: [
                {
                  groups: [
                    {
                      id: "tables",
                      text: "Tables",
                      isMobileOnly: true,
                      toolTip: "Tables",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-table",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    width: 50,
                    height: 70
                  }
                }
              ]
            },
            {
              text: "Illustrations",
              alignType: ej.Ribbon.AlignType.Rows,
              content: [
                {
                  groups: [
                    {
                      id: "pictures",
                      text: "Pictures",
                      toolTip: "Pictures",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-picture",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "videos",
                      text: "Videos",
                      toolTip: "Videos",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-video",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "shapes",
                      text: "Shapes",
                      toolTip: "Shapes",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-shape",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "charts",
                      text: "Charts",
                      toolTip: "Charts",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-chart",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    width: 56,
                    height: 70
                  }
                }
              ]
            },
            {
              text: "Comments",
              alignType: ej.Ribbon.AlignType.Rows,
              content: [
                {
                  groups: [
                    {
                      id: "comments",
                      text: "Comments",
                      toolTip: "Comments",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-comment",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    width: 70,
                    height: 70
                  }
                }
              ]
            },
            {
              text: "Text",
              alignType: ej.Ribbon.AlignType.Rows,
              content: [
                {
                  groups: [
                    {
                      id: "text",
                      text: "Text",
                      toolTip: "Text",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-text",
                        width: 50,
                        click: "executeAction"
                      }
                    },
                    {
                      id: "datetime",
                      text: "Date Time",
                      toolTip: "DateTime",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-datetimenew",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    width: 70,
                    height: 70
                  }
                }
              ]
            },
            {
              text: "Hyperlink",
              alignType: ej.Ribbon.AlignType.Rows,
              content: [
                {
                  groups: [
                    {
                      id: "hyperlink",
                      text: "Hyperlink",
                      toolTip: "Hyperlink",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-hyperlink",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    width: 70,
                    height: 70
                  }
                }
              ]
            },
            {
              text: "Equation",
              alignType: ej.Ribbon.AlignType.Rows,
              content: [
                {
                  groups: [
                    {
                      id: "equation",
                      text: "Equation",
                      toolTip: "Equation",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-equation",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    width: 60,
                    height: 70
                  }
                }
              ]
            },
            {
              text: "Print Layout",
              alignType: ej.Ribbon.AlignType.Rows,
              content: [
                {
                  groups: [
                    {
                      id: "printlayout",
                      text: "Print Layout",
                      toolTip: "Print Layout",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-printlayout",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    width: 80,
                    height: 70
                  }
                }
              ]
            },
            {
              text: "Save",
              alignType: ej.Ribbon.AlignType.Rows,
              content: [
                {
                  groups: [
                    {
                      id: "print",
                      text: "Print",
                      toolTip: "Print",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-print",
                        click: "executeAction"
                      }
                    },
                    {
                      id: "save",
                      text: "Save",
                      toolTip: "Save",
                      buttonSettings: {
                        contentType: ej.ContentType.TextAndImage,
                        imagePosition: ej.ImagePosition.ImageTop,
                        prefixIcon: "e-icon e-ribbon e-save",
                        click: "executeAction"
                      }
                    }
                  ],
                  defaults: {
                    type: ej.Ribbon.Type.Button,
                    width: 50,
                    height: 70
                  }
                }
              ]
            }
          ]
        }
      ],
      create: function(args) {
        debugger;
        $("#fontcolor").ejColorPicker({
          value: "#FFFF00",
          modelType: "palette",
          cssClass: "e-ribbon",
          toolIcon: "e-fontcoloricon",
          select: function(args) {
            this._id.indexOf("fillcolor") != -1
              ? $("#contenteditor").css("background-color", args.value)
              : document.execCommand("forecolor", false, args.value);
          }
        });
        $("#fillcolor").ejColorPicker({
          value: "#FF0000",
          modelType: "palette",
          cssClass: "e-ribbon",
          toolIcon: "e-fillcoloricon",
          select: function(args) {
            this._id.indexOf("fillcolor") != -1
              ? $("#contenteditor").css("background-color", args.value)
              : document.execCommand("forecolor", false, args.value);
          }
        });
      },
      tabClick: function(args) {
        debugger;
      },
      tabCreate: function(args) {
        debugger;
      },
      expand: function(args) {
        debugger;
      }
    });
  }
  innerSplitterElement() {
    return (
      <SplitterComponent
        id="codeEditor"
        ref={splitter => {
          this.innerSplitterInstance = splitter;
        }}
      >
        <PanesDirective>
          <PaneDirective size="29%" min="23%" content="#accordion_splitter" />
          <PaneDirective size="20%" min="15%" />
          <PaneDirective size="35%" min="35%" content="#treegrid_splitter" />
        </PanesDirective>
      </SplitterComponent>
    );
  }
  content0() {
    return (
      <div>
        Microsoft ASP.NET is a set of technologies in the Microsoft .NET
        Framework for building Web applications and XML Web services.
      </div>
    );
  }
  content1() {
    return (
      <div>
        The Model-View-Controller (MVC) architectural pattern separates an
        application into three main components: the model, the view, and the
        controller.
      </div>
    );
  }
  content2() {
    return (
      <div>
        JavaScript (JS) is an interpreted computer programming language.It was
        originally implemented as part of web browsers so that client-side
        scripts could interact with the user, control the browser, communicate
        asynchronously, and alter the document content that was displayed.
      </div>
    );
  }
  render() {
    return (
      <div id="target" className="control-section code-editor">
        <div>
          <div>
            <div id="defaultRibbon" />
          </div>
          <ul id="ribbonmenu">
            <li>
              <a>FILE</a>
              <ul>
                <li>
                  <a>New</a>
                </li>
                <li>
                  <a>Open</a>
                </li>
                <li>
                  <a>Save</a>
                </li>
                <li>
                  <a>Save As</a>
                </li>
                <li>
                  <a>Print</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul id="pasteSplit">
            <li>
              <a>Paste</a>
            </li>
          </ul>
          <input id="fontcolor" />
          <input id="fillcolor" />
        </div>
        <SplitterComponent
          id="splitter2"
          orientation="Vertical"
          height="100%"
          width="100%"
          ref={splitter => {
            this.splitterInstance = splitter;
          }}
        >
          <PanesDirective>
            <PaneDirective content="#defaultRibbon" />
            <PaneDirective
              size={this.paneSize}
              min={this.minimumSize}
              content={this.innerSplitterElement.bind(this)}
            />
          </PanesDirective>
        </SplitterComponent>
        <TreeGridComponent
          id="treegrid_splitter"
          dataSource={this.data}
          hasChildMapping="isParent"
          treeColumnIndex={1}
          idMapping="TaskID"
          parentIdMapping="ParentItem"
          height="260"
          allowPaging="true"
        >
          <ColumnsDirective>
            <ColumnDirective
              field="TaskID"
              headerText="Task ID"
              width="90"
              textAlign="Right"
            />
            <ColumnDirective
              field="TaskName"
              headerText="Task Name"
              width="180"
            />
            <ColumnDirective
              field="StartDate"
              headerText="Start Date"
              width="90"
              format="yMd"
              textAlign="Right"
              type="date"
            />
            <ColumnDirective
              field="Duration"
              headerText="Duration"
              width="80"
              textAlign="Right"
            />
          </ColumnsDirective>
          <Inject services={[Page]} />
        </TreeGridComponent>
        <AccordionComponent id="accordion_splitter">
          <AccordionItemsDirective>
            <AccordionItemDirective
              expanded="true"
              header="ASP.NET"
              content={this.content0}
            />
            <AccordionItemDirective
              header="ASP.NET MVC"
              content={this.content1}
            />
            <AccordionItemDirective
              header="JavaScript"
              content={this.content2}
            />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
    );
  }
}

render(<CodeEditor />, document.getElementById("sample"));
