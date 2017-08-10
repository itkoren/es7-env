#!/usr/bin/env bash


main() {
	local source_dir="$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )"
	source "$source_dir/docker-lib.sh"

	echo 'stopping es7 container...'
	stop_container 'es7'
	echo 'removing es7-env image...'
	remove_image 'es7-env'
}

main; exit 0
