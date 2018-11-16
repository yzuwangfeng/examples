import WidgetBase from "@dojo/framework/widget-core/WidgetBase";
import Hello from "./widgets/Hello";
import { v, w } from "@dojo/framework/widget-core/d";
import { ProjectorMixin } from "@dojo/framework/widget-core/mixins/Projector";
import { Registry } from "@dojo/framework/widget-core/Registry";
import { registerThemeInjector } from "@dojo/framework/widget-core/mixins/Themed";
import designerTheme from "./themes/default/theme";
import TabController from "@dojo/widgets/tab-controller/index";
import Tab from "@dojo/widgets/tab/index";
// import { registerThemeInjector } from "@dojo/framework/widget-core/mixins/Themed";
// import designerTheme from "./themes/default/theme";

class App extends WidgetBase {
  protected render() {
    return v("div", [
      w(Hello, { name: "CodeSandbox" }),
      v("h2", ["Start editing to see some magic happen \u2728"]),
      w(
        TabController,
        {
          activeIndex: 0,
          onRequestTabChange: (index: number) => {}
        },
        [
          w(Tab, { key: "widgets", label: "部件1" }, []),
          w(Tab, { key: "widgets", label: "部件2" }, [])
        ]
      )
    ]);
  }
}

const registry = new Registry();
registerThemeInjector(designerTheme, registry);
const Projector = ProjectorMixin(App);
const projector = new Projector();
projector.setProperties({ registry });

// By default, append() will attach the rendered content to document.body.  To insert this application
// into existing HTML content, pass the desired root node to append().
projector.append();
