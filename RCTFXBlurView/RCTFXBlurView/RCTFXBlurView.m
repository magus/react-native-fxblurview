//
//  RCTFXBlurView.m
//  react-native-fxblurview
//
//  Created by Noah Jorgensen on 5/22/16.
//  Copyright © 2016 magus. All rights reserved.
//

#import "RCTLog.h"

#import "RCTFXBlurView.h"

#import "FXBlurView.h"

@implementation RCTFXBlurView

- (instancetype)init
{
  if ((self = [super init])) {
    self.blurView = [[FXBlurView alloc] init];
    self.blurView.tintColor = [UIColor clearColor];
    self.blurView.userInteractionEnabled = false;
    self.blurView.dynamic = NO;
  }
  
  return self;
}

-(void)layoutSubviews
{
  [super layoutSubviews];
  
  self.blurView.frame = self.bounds;
}

#pragma mark - Prop setters

- (void)setBlurRadius:(float)blurRadius
{
  [UIView animateWithDuration:0.5 animations:^{
    self.blurView.blurRadius = blurRadius;
    [self setNeedsDisplay];
  }];
}

- (void)setBlurEnabled:(BOOL)blurEnabled
{
  self.blurView.blurEnabled = blurEnabled;
  
  if (blurEnabled) {
    [self insertSubview:self.blurView atIndex:self.subviews.count];
  } else {
   [self.blurView removeFromSuperview];
  }
  
  [self setNeedsDisplay];
}

@end