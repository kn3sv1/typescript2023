// https://metanit.com/web/typescript/3.11.php

import hello from "./message";
import {Phone, call} from "./devices";

let iphone: Phone = new Phone("iPhone X");
call(iphone);

hello();