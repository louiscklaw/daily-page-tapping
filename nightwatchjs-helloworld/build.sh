#!/usr/bin/env bash

set -ex

rm -rf *.log
rm -rf tests_output

yarn
yarn gulp helloworld_task
yarn gulp test_task
