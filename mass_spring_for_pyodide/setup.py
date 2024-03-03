from setuptools import setup
from pybind11.setup_helpers import Pybind11Extension

ext_modules = [
    Pybind11Extension(
        "mass_spring",
        ["bind_mass_spring.cc"],
    ),
]

headers = ["mass_spring.h",
           "nonlinfunc.h",
           "ode.h",
           "Newton.h"]

setup(
    name="mass_spring",
    version="0.0.1",
    ext_modules=ext_modules,
    headers=headers,
)
