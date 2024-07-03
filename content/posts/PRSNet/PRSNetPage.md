---
title: PRSNet
description: Object Detector Neural Network Framework
date: 2018-03-22
draft: false
slug: /archive/prsnet
---

During my Co-op term at Provectus Robotics, this was one of the many projects I worked on. The task assigned to me was to improve our pedestrian detection using camera data. At the time all sensing was done using Lidar sensors.

My research first led me to a machine learning process called "Histogram of Oriented Gradients – SupportVector Machines" (HoG-SVM). However, this method of pedestrian detection proved to be less accurate and outdated compared to newer methods such as Convolutional Neural Networks (CNN or ConvNet). CNN’s have become the forefront of machine learning due to their accuracy and adaptiveness. ConvNets are similar to HoG’s as they both use kernels to convolve over images. However with Convolutional Neural Networks, the kernel values are initially set to random values as opposed to being predefined. Theses values change and update to improve the accuracy of the prediction.

This all led to the development of Provectus Robotics Solutions Convolutional Neural Network (PRSNet). It is a framework of classes and functions based off of Darknet/Yolo network by PJ Reddie designed to detect people and vehicles in a video stream.

You can read the report <a href="/PRSNetDocumentation.pdf" target="_blank">here.</a>
