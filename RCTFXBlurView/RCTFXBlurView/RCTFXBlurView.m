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

  [self.blurView removeFromSuperview];

  if (self.blurView.blurEnabled) {
    self.blurView.frame = self.bounds;
    [self insertSubview:self.blurView atIndex:self.subviews.count];
  }

  [self.blurView updateAsynchronously:NO completion:NULL];
}

#pragma mark - Prop setters

- (void)setBlurRadius:(float)blurRadius
{
  self.blurView.blurRadius = blurRadius;

  [self layoutSubviews];
}

- (void)setBlurEnabled:(BOOL)blurEnabled
{
  self.blurView.blurEnabled = blurEnabled;

  [self layoutSubviews];
}

@end
