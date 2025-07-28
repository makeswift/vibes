#!/usr/bin/env node

import { Command } from "commander";
import { addCommand } from "./commands/add.js";

const program = new Command();

program
  .name("vibes")
  .description("CLI for installing VIBES components")
  .version("1.4.0");

program.addCommand(addCommand);

program.parse();
