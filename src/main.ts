import WidgetBase from "@dojo/framework/widget-core/WidgetBase";
import renderer from '@dojo/framework/widget-core/vdom';
import Hello from "./widgets/Hello";
import { v, w } from "@dojo/framework/widget-core/d";
import { Registry } from "@dojo/framework/widget-core/Registry";
import { registerThemeInjector } from "@dojo/framework/widget-core/mixins/Themed";
import designerTheme from "./themes/default/theme";
import TabController from "@dojo/widgets/tab-controller/index";
import Tab from "@dojo/widgets/tab/index";
import '@dojo/themes/dojo/index.css'
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
const r = renderer(() => w(App, {}));
r.mount({ registry });
