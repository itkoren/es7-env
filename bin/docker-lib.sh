#!/usr/bin/env bash


remove_image() {
	local name="$1"
	local image="$(docker images "$name" -q)"
	if [[ $image ]]; then
		docker rmi "$image"
	fi
}

remove_volume() {
	local name="$1"
	local npm_volume="$(docker volume ls -q | grep "$name")"
	if [[ $npm_volume ]]; then
		docker volume rm "$npm_volume"
	fi
}

remove_dangling_images() {
	local dangling_images="$(docker images -aq -f dangling=true)"
	if [[ $dangling_images ]]; then
		docker rmi "$dangling_images"
	fi
}

stop_container() {
	local name="$1"
	local container="$(docker ps -qf "ancestor=$name")"
	if [[ $container ]]; then
		docker stop "$container"
	fi
}
