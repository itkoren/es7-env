#!/usr/bin/env bash


main() {
	local source_dir="$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )"
	source "$source_dir/docker-lib.sh"

	echo 'removing dangling images...'
	remove_dangling_images
	echo 'removing node base image...'
	remove_image 'node'
	echo 'removing node modules volume...'
	remove_volume 'es7-node-modules'
}

main; exit 0
