import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5ebdbc4c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=5ebdbc4c"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=5ebdbc4c"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/src/App.jsx?t=1728624617974";
import "/src/index.css?t=1728624617974";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=5ebdbc4c";
import store from "/src/store/store.js";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=5ebdbc4c";
import { AuthLayout, Login } from "/src/components/index.js?t=1728624617974";
import {
  Home,
  Signup,
  EditPost,
  Post,
  AllPost,
  AddPost
} from "/src/components/pages/index.js?t=1728624617974";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
        fileName: "D:/react project/blog/src/main.jsx",
        lineNumber: 22,
        columnNumber: 12
      }, this),
      children: [
        {
          path: "/",
          element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
            fileName: "D:/react project/blog/src/main.jsx",
            lineNumber: 26,
            columnNumber: 14
          }, this)
        },
        {
          path: "/login",
          element: /* @__PURE__ */ jsxDEV(AuthLayout, { authentication: false, children: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
            fileName: "D:/react project/blog/src/main.jsx",
            lineNumber: 32,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "D:/react project/blog/src/main.jsx",
            lineNumber: 31,
            columnNumber: 5
          }, this)
        },
        {
          path: "/signup",
          element: /* @__PURE__ */ jsxDEV(AuthLayout, { authentication: false, children: /* @__PURE__ */ jsxDEV(Signup, {}, void 0, false, {
            fileName: "D:/react project/blog/src/main.jsx",
            lineNumber: 40,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "D:/react project/blog/src/main.jsx",
            lineNumber: 39,
            columnNumber: 5
          }, this)
        },
        {
          path: "/all-posts",
          element: /* @__PURE__ */ jsxDEV(AuthLayout, { authentication: true, children: [
            " ",
            /* @__PURE__ */ jsxDEV(AllPost, {}, void 0, false, {
              fileName: "D:/react project/blog/src/main.jsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "D:/react project/blog/src/main.jsx",
            lineNumber: 47,
            columnNumber: 5
          }, this)
        },
        {
          path: "/add-post",
          element: /* @__PURE__ */ jsxDEV(AuthLayout, { authentication: true, children: [
            " ",
            /* @__PURE__ */ jsxDEV(AddPost, {}, void 0, false, {
              fileName: "D:/react project/blog/src/main.jsx",
              lineNumber: 58,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "D:/react project/blog/src/main.jsx",
            lineNumber: 56,
            columnNumber: 5
          }, this)
        },
        {
          path: "/edit-post/:slug",
          element: /* @__PURE__ */ jsxDEV(AuthLayout, { authentication: true, children: [
            " ",
            /* @__PURE__ */ jsxDEV(EditPost, {}, void 0, false, {
              fileName: "D:/react project/blog/src/main.jsx",
              lineNumber: 67,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "D:/react project/blog/src/main.jsx",
            lineNumber: 65,
            columnNumber: 5
          }, this)
        },
        {
          path: "/post/:slug",
          element: /* @__PURE__ */ jsxDEV(Post, {}, void 0, false, {
            fileName: "D:/react project/blog/src/main.jsx",
            lineNumber: 73,
            columnNumber: 14
          }, this)
        }
      ]
    }
  ]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "D:/react project/blog/src/main.jsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "D:/react project/blog/src/main.jsx",
    lineNumber: 80,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "D:/react project/blog/src/main.jsx",
    lineNumber: 79,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUJhO0FBckJiLFNBQVNBLGtCQUFrQjtBQUMzQixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLFNBQVM7QUFDaEIsT0FBTztBQUNQLFNBQVNDLGdCQUFnQjtBQUN6QixPQUFPQyxXQUFXO0FBQ2xCLFNBQVNDLHFCQUFxQkMsc0JBQXNCO0FBQ3BELFNBQVNDLFlBQVlDLGFBQWE7QUFDbEM7QUFBQSxFQUNFQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxPQUNLO0FBR1AsTUFBTUMsU0FBU1Y7QUFBQUEsRUFBb0I7QUFBQSxJQUNqQztBQUFBLE1BQ0VXLE1BQU07QUFBQSxNQUNOQyxTQUFTLHVCQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFJO0FBQUEsTUFDYkMsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFRixNQUFNO0FBQUEsVUFDTkMsU0FBUyx1QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUs7QUFBQSxRQUNoQjtBQUFBLFFBQ0E7QUFBQSxVQUNFRCxNQUFNO0FBQUEsVUFDTkMsU0FDRSx1QkFBQyxjQUFXLGdCQUFnQixPQUMxQixpQ0FBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQU0sS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUEsUUFFSjtBQUFBLFFBQ0E7QUFBQSxVQUNFRCxNQUFNO0FBQUEsVUFDTkMsU0FDRSx1QkFBQyxjQUFXLGdCQUFnQixPQUMxQixpQ0FBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQU8sS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUEsUUFFSjtBQUFBLFFBQ0E7QUFBQSxVQUNFRCxNQUFNO0FBQUEsVUFDTkMsU0FDRSx1QkFBQyxjQUFXLGdCQUFjLE1BQ3ZCO0FBQUE7QUFBQSxZQUNELHVCQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUTtBQUFBLGVBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFHQTtBQUFBLFFBRUo7QUFBQSxRQUNBO0FBQUEsVUFDRUQsTUFBTTtBQUFBLFVBQ05DLFNBQ0UsdUJBQUMsY0FBVyxnQkFBYyxNQUN2QjtBQUFBO0FBQUEsWUFDRCx1QkFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVE7QUFBQSxlQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR0E7QUFBQSxRQUVKO0FBQUEsUUFDQTtBQUFBLFVBQ0VELE1BQU07QUFBQSxVQUNOQyxTQUNFLHVCQUFDLGNBQVcsZ0JBQWMsTUFDdkI7QUFBQTtBQUFBLFlBQ0QsdUJBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFTO0FBQUEsZUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdBO0FBQUEsUUFFSjtBQUFBLFFBQ0E7QUFBQSxVQUNFRCxNQUFNO0FBQUEsVUFDTkMsU0FBUyx1QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUs7QUFBQSxRQUNoQjtBQUFBLE1BQUM7QUFBQSxJQUVMO0FBQUEsRUFBQztBQUNGO0FBQ0RoQixTQUFTa0IsV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFDbkQsdUJBQUMsY0FDQyxpQ0FBQyxZQUFTLE9BQ1IsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQixLQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUE7QUFDRiIsIm5hbWVzIjpbIlN0cmljdE1vZGUiLCJSZWFjdERPTSIsIkFwcCIsIlByb3ZpZGVyIiwic3RvcmUiLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJBdXRoTGF5b3V0IiwiTG9naW4iLCJIb21lIiwiU2lnbnVwIiwiRWRpdFBvc3QiLCJQb3N0IiwiQWxsUG9zdCIsIkFkZFBvc3QiLCJyb3V0ZXIiLCJwYXRoIiwiZWxlbWVudCIsImNoaWxkcmVuIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC5qc3hcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlL3N0b3JlLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyLCBSb3V0ZXJQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBBdXRoTGF5b3V0LCBMb2dpbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5kZXguanNcIjtcbmltcG9ydCB7XG4gIEhvbWUsXG4gIFNpZ251cCxcbiAgRWRpdFBvc3QsXG4gIFBvc3QsXG4gIEFsbFBvc3QsXG4gIEFkZFBvc3QsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvaW5kZXguanNcIjtcbi8vIGltcG9ydCBBdXRoTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvQXV0aExheW91dC5qc3hcIjtcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBlbGVtZW50OiA8QXBwIC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBlbGVtZW50OiA8SG9tZSAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2xvZ2luXCIsXG4gICAgICAgIGVsZW1lbnQ6IChcbiAgICAgICAgICA8QXV0aExheW91dCBhdXRoZW50aWNhdGlvbj17ZmFsc2V9PlxuICAgICAgICAgICAgPExvZ2luIC8+XG4gICAgICAgICAgPC9BdXRoTGF5b3V0PlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvc2lnbnVwXCIsXG4gICAgICAgIGVsZW1lbnQ6IChcbiAgICAgICAgICA8QXV0aExheW91dCBhdXRoZW50aWNhdGlvbj17ZmFsc2V9PlxuICAgICAgICAgICAgPFNpZ251cCAvPlxuICAgICAgICAgIDwvQXV0aExheW91dD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2FsbC1wb3N0c1wiLFxuICAgICAgICBlbGVtZW50OiAoXG4gICAgICAgICAgPEF1dGhMYXlvdXQgYXV0aGVudGljYXRpb24+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8QWxsUG9zdCAvPlxuICAgICAgICAgIDwvQXV0aExheW91dD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2FkZC1wb3N0XCIsXG4gICAgICAgIGVsZW1lbnQ6IChcbiAgICAgICAgICA8QXV0aExheW91dCBhdXRoZW50aWNhdGlvbj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxBZGRQb3N0IC8+XG4gICAgICAgICAgPC9BdXRoTGF5b3V0PlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZWRpdC1wb3N0LzpzbHVnXCIsXG4gICAgICAgIGVsZW1lbnQ6IChcbiAgICAgICAgICA8QXV0aExheW91dCBhdXRoZW50aWNhdGlvbj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxFZGl0UG9zdCAvPlxuICAgICAgICAgIDwvQXV0aExheW91dD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL3Bvc3QvOnNsdWdcIixcbiAgICAgICAgZWxlbWVudDogPFBvc3QgLz4sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dKTtcblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoXG4gIDxTdHJpY3RNb2RlPlxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIDwvU3RyaWN0TW9kZT5cbik7XG4iXSwiZmlsZSI6IkQ6L3JlYWN0IHByb2plY3QvYmxvZy9zcmMvbWFpbi5qc3gifQ==