---
title: Dynamic Occupancy Grid Map
description: Dynamic Occupancy Grid Map
date: 2018-06-28
draft: false
slug: /archive/dynamic-grid-map
---

## Summary

In my recent work at Provectus Robotics, I focused on implementing and enhancing a dynamic occupancy grid map, a sophisticated method used for spatial representation in autonomous systems. This technology is pivotal in the navigation, obstacle avoidance, and path planning of our autonomous systems.

A dynamic occupancy grid map provides a probabilistic model of the environment, capturing the presence or absence of obstacles and their potential movement over time. The algorithm leverages Dempster-Shafer Theory and a modified particle filter to enhance its probabilistic modeling capabilities. Dempster-Shafer Theory provides a framework for managing uncertainty and combining evidence from various sources, which is crucial for accurately representing the environment in the presence of incomplete or ambiguous data. This theory allows the grid map to better handle conflicting information and provide more robust estimates of occupancy probabilities.

The modified particle filter, on the other hand, aids in tracking the states of moving objects within the grid. By utilizing a set of particles to represent different hypotheses of object positions and updating these particles based on new sensor data, the filter can effectively predict and update the dynamic states of the environment. This combination of advanced probabilistic techniques ensures that the dynamic occupancy grid map remains accurate and reliable, even in complex and unpredictable settings.

The work is based on the following <a href="https://mediatum.ub.tum.de/doc/1459214/file.pdf" target="_blank">paper.</a>

## Improvements

I further built upon the work laid out in the paper, below are a few key improvements:

- **Filtering for lidar inputs:** Added filtering based on size, density and height to allow for offroad obstacle detection and determination
- **Filtering for lidar and radar inputs:** Added Filtering based on radar-cross-section, input velocity, ground height, and range to prevent false positive detection and improve robustness of sensing the surrounding environment.
- **Circular buffer for speed and performance:** Integrated a circular buffer to reduce computational overhead during translations, enhancing real-time operation efficiency.
- **Recursive shadow casting for ray tracing:** Utilized recursive shadow casting to improve obstacle detection accuracy by managing occlusions and shadows effectively.
- **Height addition for 2.5D representation:** Extended the traditional 2D grid map to a 2.5D representation by incorporating height information, enabling better navigation in three-dimensional spaces and persistence of low obstacles out of the sensor's view.
- **Bookkeeping of occupied cells:** Implemented a bookkeeping system to track occupied cells, speeding up computations by focusing processing power only on relevant areas of the grid.
