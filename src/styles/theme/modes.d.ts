import 'styled-components';
import {AppTheme} from "./modes";


declare module 'styled-components' {
    export interface DefaultTheme extends AppTheme {
    }
}