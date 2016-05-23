//
//  RCTFXBlurViewManager.m
//  react-native-fxblurview
//
//  Created by Noah Jorgensen on 5/22/16.
//  Copyright © 2016 magus. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTUIManager.h"

#import "RCTFXBlurViewManager.h"
#import "RCTFXBlurView.h"

@implementation RCTFXBlurViewManager

RCT_EXPORT_MODULE();
@synthesize bridge = _bridge;

- (UIView *)view
{
  return [[RCTFXBlurView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(blurRadius, float)
RCT_EXPORT_VIEW_PROPERTY(blurEnabled, BOOL)

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

@end