.. pybind to jupyterlite documentation master file, created by
   sphinx-quickstart on Sun Mar  3 12:55:37 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

A guide on using C++ code in jupyterlite with pybind11
======================================================

This document is meant to guide you through the process of integrating C++ into jupyterlite.
This includes the usage of pybind11, setuptools, emscripten/pyodide and jupyterlite itself.
There should be a way to integrate CMake as well. However, using setuptools solves a bug where emcmake fails to find pybind's cmake files.

The idea is to create the following:

.. raw:: html

   <iframe src="https://homomorpheus.github.io/Neo-ODE_interactive/dist/lab/index.html" width=100%, height=500>

.. toctree::
   :maxdepth: 2

   Homepage <self>
   cpp/index
   jplite/index
