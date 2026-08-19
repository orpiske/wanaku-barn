package ai.wanaku.operator.wanaku;

import java.util.List;

public class WanakuRouterSpec {
    private String imagePullPolicy;
    private WanakuTypes.ExposureSpec exposure;
    private RouterSpec router;
    private PraxisSpec praxis;

    public String getImagePullPolicy() {
        return imagePullPolicy;
    }

    public void setImagePullPolicy(String imagePullPolicy) {
        this.imagePullPolicy = imagePullPolicy;
    }

    public WanakuTypes.ExposureSpec getExposure() {
        return exposure;
    }

    public void setExposure(WanakuTypes.ExposureSpec exposure) {
        this.exposure = exposure;
    }

    public RouterSpec getRouter() {
        return router;
    }

    public void setRouter(RouterSpec router) {
        this.router = router;
    }

    public PraxisSpec getPraxis() {
        return praxis;
    }

    public void setPraxis(PraxisSpec praxis) {
        this.praxis = praxis;
    }

    public static class PraxisSpec {
        private String image;
        private List<WanakuTypes.EnvVar> env;
        private String imagePullPolicy;

        public String getImage() {
            return image;
        }

        public void setImage(String image) {
            this.image = image;
        }

        public List<WanakuTypes.EnvVar> getEnv() {
            return env;
        }

        public void setEnv(List<WanakuTypes.EnvVar> env) {
            this.env = env;
        }

        public String getImagePullPolicy() {
            return imagePullPolicy;
        }

        public void setImagePullPolicy(String imagePullPolicy) {
            this.imagePullPolicy = imagePullPolicy;
        }
    }

    public static class RouterSpec {
        private boolean enabled;
        private String image;
        private List<WanakuTypes.EnvVar> env;
        private String imagePullPolicy;

        public boolean isEnabled() {
            return enabled;
        }

        public void setEnabled(boolean enabled) {
            this.enabled = enabled;
        }

        public String getImage() {
            return image;
        }

        public void setImage(String image) {
            this.image = image;
        }

        public List<WanakuTypes.EnvVar> getEnv() {
            return env;
        }

        public void setEnv(List<WanakuTypes.EnvVar> env) {
            this.env = env;
        }

        public String getImagePullPolicy() {
            return imagePullPolicy;
        }

        public void setImagePullPolicy(String imagePullPolicy) {
            this.imagePullPolicy = imagePullPolicy;
        }
    }
}
