#!/usr/bin/env bash


main() {
	local source_dir="$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )"
	source "$source_dir/docker-lib.sh"

	echo 'stopping es7 container...'
	stop_container 'es7'
	echo 'running es7 container...'
	docker run --rm -it -p 3000:3000 -p 5858:5858 -p 35729:35729 -v "$PWD:/var/app" -v es7-node-modules:/var/app/node_modules --name es7 es7-env bash
}

main; exit 0
