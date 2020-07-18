#!/usr/bin/env bash

set -ex

yarn

yarn gulp helloworld_task
yarn gulp test_task
