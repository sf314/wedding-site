# This makefile exists because I think they are self-documenting convenience
# scripts. I also come from a C/C++ project background that made heavy use
# of makefiles back in the day.
#
# This is also great because I can't put comments in the `package.json` file
# for my custom commands.
#
# For documentation purposes, I will not be using make dependencies; all of the
# commands will be spelled out in full.
#
# Example: make clean build preview

.PHONY: build

all:
	@echo "Choose one of i.e. clean, build, run, preview"

# Generate prod-ready build directory. Declared phony to ensure rebuild.
build:
	npm run build

# Run local dev build
run:
	npm run start

# Run a local firebase deployment using prod-ready build
preview:
	firebase serve

# Destroy the current build directory
clean:
	rm -rf build
